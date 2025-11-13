import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getAdminClient } from '@/lib/supabase/admin'
import { selectTenant } from './actions'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/authentication/login')
  }

  const admin = getAdminClient()

  const { data: memberships, error } = await admin
    .schema('app')
    .from('memberships')
    .select('tenant_id, role')
    .eq('user_id', user!.id)
    .eq('status', 'active')

  if (error) {
    throw error
  }

  if (!memberships || memberships.length === 0) {
    redirect('/onboarding')
  }

  const { data: tenantsRows, error: tenantsError } = await admin
    .schema('app')
    .from('tenants')
    .select('id, name, domain')
    .in(
      'id',
      memberships.map((m) => m.tenant_id)
    )

  if (tenantsError) {
    throw tenantsError
  }

  const membershipMap = new Map(
    memberships.map((m) => [m.tenant_id, m.role])
  )

  const workspaces = (tenantsRows ?? []).map((tenant) => {
    const name = tenant.name ?? 'Workspace'
    const initials = name
      .split(' ')
      .map((word: string) => word[0]?.toUpperCase() ?? '')
      .slice(0, 2)
      .join('')
    return {
      id: tenant.id,
      name,
      initials,
      role: membershipMap.get(tenant.id) ?? 'member',
    }
  })

  const userDisplayName =
    user.user_metadata?.first_name && user.user_metadata?.last_name
      ? `${user.user_metadata.first_name} ${user.user_metadata.last_name}`
      : user.email?.split('@')[0] ?? 'User'
  const userInitials = userDisplayName
    .split(' ')
    .map((word: string) => word[0]?.toUpperCase() ?? '')
    .slice(0, 2)
    .join('') || 'U'

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
              {userInitials}
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Select a workspace</h1>
          <p className="mt-2 text-sm text-gray-600">
            Choose a workspace to continue to Contre
          </p>
          <p className="mt-1 text-xs text-gray-500">{user.email}</p>
        </div>

        <div className="space-y-2">
          {workspaces.map((workspace) => (
            <form key={workspace.id} action={selectTenant}>
              <input type="hidden" name="tenant_id" value={workspace.id} />
              <button
                type="submit"
                className="flex w-full items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 text-left transition hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-sm font-semibold text-white">
                  {workspace.initials || 'W'}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-gray-900">{workspace.name}</div>
                  <div className="text-xs text-gray-500 capitalize">{workspace.role}</div>
                </div>
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>
          ))}
        </div>
      </div>
    </div>
  )
}

