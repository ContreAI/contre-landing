import { randomUUID } from 'crypto'
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

export async function completeAgentOnboarding(formData: FormData) {
  'use server'

  
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/authentication/login')
  }

  const admin = getAdminClient()

  

  redirect('/dashboard')
}

