import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getAdminClient } from '@/lib/supabase/admin'

export async function selectTenant(formData: FormData) {
  'use server'

  const tenantId = formData.get('tenant_id')

  if (typeof tenantId !== 'string' || tenantId.trim().length === 0) {
    throw new Error('Tenant selection is required')
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/authentication/login')
  }

  const admin = getAdminClient()

  const { data: membership, error: membershipError } = await admin
    .schema('app')
    .from('memberships')
    .select('role, status')
    .eq('tenant_id', tenantId)
    .eq('user_id', user.id)
    .maybeSingle()

  if (membershipError || !membership || membership.status !== 'active') {
    console.error('Failed to confirm tenant membership', membershipError)
    throw new Error('Unable to switch workspace right now.')
  }

  const { data: tenantRow, error: tenantError } = await admin
    .schema('app')
    .from('tenants')
    .select('domain')
    .eq('id', tenantId)
    .maybeSingle()

  if (tenantError || !tenantRow) {
    console.error('Failed to load tenant domain', tenantError)
    throw new Error('Unable to switch workspace right now.')
  }

  const { error: userSettingsError } = await admin
    .schema('app')
    .from('user_settings')
    .upsert(
      {
        user_id: user.id,
        active_tenant_id: tenantId,
      },
      { onConflict: 'user_id' },
    )

  if (userSettingsError) {
    console.error('Failed to update user_settings', userSettingsError)
    throw new Error('Unable to switch workspace right now.')
  }

  const existingAppMetadata = (user.app_metadata ?? {}) as Record<string, unknown>
  const { error: appMetadataError } = await admin.auth.admin.updateUserById(user.id, {
    app_metadata: {
      ...existingAppMetadata,
      tenant_id: tenantId,
      tenant_role: membership.role,
    },
  })

  if (appMetadataError) {
    console.error('Failed to update user app metadata', appMetadataError)
    throw new Error('Unable to switch workspace right now.')
  }

  const destinationDomain = tenantRow.domain
  const destinationUrl =
    typeof destinationDomain === 'string' && destinationDomain.length > 0
      ? destinationDomain.startsWith('http')
        ? destinationDomain
        : `https://${destinationDomain}`
      : `/tenants/${tenantId}`

  redirect(destinationUrl)
}

