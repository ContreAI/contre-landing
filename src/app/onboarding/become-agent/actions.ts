import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getAdminClient } from '@/lib/supabase/admin'

export type MembershipWithTenant =
  | {
      tenants:
        | null
        | { tenant_type: string | null }
        | Array<{ tenant_type: string | null } | null>
    }
  | null

export async function completeAgentOnboarding(_formData: FormData) {
  'use server'

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/authentication/login')
  }

  const admin = getAdminClient()

  const { data: platformTenant, error: platformTenantError } = await admin
    .schema('app')
    .from('tenants')
    .select('id')
    .eq('tenant_type', 'b2c')
    .order('created_at', { ascending: true })
    .limit(1)
    .maybeSingle()

  if (platformTenantError || !platformTenant?.id) {
    console.error('Failed to locate platform tenant', platformTenantError)
    throw new Error('Agent onboarding is not available. Please try again later.')
  }

  const platformTenantId = platformTenant.id
  const userMetadata = (user.user_metadata ?? {}) as Record<string, unknown>
  const firstName =
    typeof userMetadata.first_name === 'string' ? (userMetadata.first_name as string) : null
  const lastName =
    typeof userMetadata.last_name === 'string' ? (userMetadata.last_name as string) : null

  const { error: profileError } = await admin
    .schema('app')
    .from('profiles')
    .upsert(
      {
        user_id: user.id,
        email: user.email,
        first_name: firstName,
        last_name: lastName,
      },
      { onConflict: 'user_id' },
    )

  if (profileError) {
    console.error('Failed to upsert profile', profileError)
    throw new Error('Unable to complete agent onboarding (profile).')
  }

  const { error: platformRoleError } = await admin
    .schema('app')
    .from('platform_roles')
    .upsert(
      {
        user_id: user.id,
        role: 'user',
      },
      { onConflict: 'user_id' },
    )

  if (platformRoleError) {
    console.error('Failed to assign platform role', platformRoleError)
    throw new Error('Unable to complete agent onboarding (role).')
  }

  const { error: membershipError } = await admin
    .schema('app')
    .from('memberships')
    .upsert(
      {
        user_id: user.id,
        tenant_id: platformTenantId,
        role: 'agent',
        status: 'active',
      },
      { onConflict: 'user_id,tenant_id' },
    )

  if (membershipError) {
    console.error('Failed to create membership', membershipError)
    throw new Error('Unable to complete agent onboarding (membership).')
  }

  const { error: userSettingsError } = await admin
    .schema('app')
    .from('user_settings')
    .upsert(
      {
        user_id: user.id,
        active_tenant_id: platformTenantId,
      },
      { onConflict: 'user_id' },
    )

  if (userSettingsError) {
    console.error('Failed to update user settings', userSettingsError)
    throw new Error('Unable to complete agent onboarding (settings).')
  }

  const { error: onboardingError } = await admin
    .schema('app')
    .from('account_onboarding')
    .upsert(
      {
        user_id: user.id,
        user_type: 'b2c',
        state: 'completed',
      },
      { onConflict: 'user_id' },
    )

  if (onboardingError) {
    console.error('Failed to update account onboarding', onboardingError)
    throw new Error('Unable to complete agent onboarding (status).')
  }

  redirect('/dashboard')
}

export async function autoCompleteAgentOnboarding() {
  'use server'

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/authentication/login')
  }

  const admin = getAdminClient()

  const { data: platformTenant, error: platformTenantError } = await admin
    .schema('app')
    .from('tenants')
    .select('id')
    .eq('tenant_type', 'b2c')
    .order('created_at', { ascending: true })
    .limit(1)
    .maybeSingle()

  if (platformTenantError || !platformTenant?.id) {
    console.error('Failed to locate platform tenant', platformTenantError)
    throw new Error('Agent onboarding is not available. Please try again later.')
  }

  const platformTenantId = platformTenant.id
  const userMetadata = (user.user_metadata ?? {}) as Record<string, unknown>
  const firstName =
    typeof userMetadata.first_name === 'string' ? (userMetadata.first_name as string) : null
  const lastName =
    typeof userMetadata.last_name === 'string' ? (userMetadata.last_name as string) : null

  const { error: profileError } = await admin
    .schema('app')
    .from('profiles')
    .upsert(
      {
        user_id: user.id,
        email: user.email,
        first_name: firstName,
        last_name: lastName,
      },
      { onConflict: 'user_id' },
    )

  if (profileError) {
    console.error('Failed to upsert profile', profileError)
    throw new Error('Unable to complete agent onboarding (profile).')
  }

  const { error: platformRoleError } = await admin
    .schema('app')
    .from('platform_roles')
    .upsert(
      {
        user_id: user.id,
        role: 'user',
      },
      { onConflict: 'user_id' },
    )

  if (platformRoleError) {
    console.error('Failed to assign platform role', platformRoleError)
    throw new Error('Unable to complete agent onboarding (role).')
  }

  const { error: membershipError } = await admin
    .schema('app')
    .from('memberships')
    .upsert(
      {
        user_id: user.id,
        tenant_id: platformTenantId,
        role: 'agent',
        status: 'active',
      },
      { onConflict: 'user_id,tenant_id' },
    )

  if (membershipError) {
    console.error('Failed to create membership', membershipError)
    throw new Error('Unable to complete agent onboarding (membership).')
  }

  const { error: userSettingsError } = await admin
    .schema('app')
    .from('user_settings')
    .upsert(
      {
        user_id: user.id,
        active_tenant_id: platformTenantId,
      },
      { onConflict: 'user_id' },
    )

  if (userSettingsError) {
    console.error('Failed to update user settings', userSettingsError)
    throw new Error('Unable to complete agent onboarding (settings).')
  }

  const { error: onboardingError } = await admin
    .schema('app')
    .from('account_onboarding')
    .upsert(
      {
        user_id: user.id,
        user_type: 'b2c',
        state: 'completed',
      },
      { onConflict: 'user_id' },
    )

  if (onboardingError) {
    console.error('Failed to update account onboarding', onboardingError)
    throw new Error('Unable to complete agent onboarding (status).')
  }

  redirect('/dashboard')
}

