import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/authentication/login')
  }

  const appDb = supabase // schema already set at client creation

  const { data: memberships, error } = await appDb
    .from('memberships')
    .select('tenant_id')
    .eq('user_id', user!.id)
    .eq('status', 'active')

  if (error) {
    throw error
  }

  const activeMemberships = (memberships ?? []).map((row) => row.tenant_id)

  if (activeMemberships.length === 0) {
    redirect('/onboarding')
  }

  const { data: tenantsRows, error: tenantsError } = await appDb
    .from('tenants')
    .select('id, name, domain')
    .in('id', activeMemberships)

  if (tenantsError) {
    throw tenantsError
  }

  const cards = (tenantsRows ?? []).map((tenant) => ({
    id: tenant.id,
    name: tenant.name ?? 'Workspace',
  }))

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-6 py-14">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-gray-900">Your Workspaces</h1>
        <p className="text-gray-600">
          Select a tenant to continue. You can manage membership and settings inside each workspace.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((tenant) => (
          <article
            key={tenant.id}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-lg font-medium text-gray-900">{tenant.name ?? 'Workspace'}</h2>
            <p className="mt-2 text-sm text-gray-500">
              Manage transactions, documents, and team members inside this workspace.
            </p>
            <Link
              href={`/tenants/${tenant.id}`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Enter Workspace
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}

