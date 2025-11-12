import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getAdminClient } from '@/lib/supabase/admin'

export default async function OnboardingPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/authentication/login')
  }

  const admin = getAdminClient();

  const { data: memberships } = await admin
    .schema('app')
    .schema('app')
    .from('memberships')
    .select('tenant_id, tenants(tenant_type, name)')
    .eq('user_id', user!.id)
    .eq('status', 'active')

  const activeMemberships =
    (memberships ?? []) as {
      tenant_id: string
      tenants: { tenant_type: string | null; name: string | null }[] | null
    }[]
  const hasB2C = activeMemberships.some((membership) =>
    (membership.tenants ?? []).some((tenant) => tenant.tenant_type === 'b2c')
  )

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-8 px-6 py-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-gray-900">Welcome to Contre</h1>
        <p className="text-gray-600">
          Choose how you want to get started. You can onboard as an individual agent
          or create a workspace for your company.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {!hasB2C && (
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-medium text-gray-900">Become an Agent</h2>
            <p className="mt-2 text-sm text-gray-600">
              Join the Contre platform as an individual agent and access tooling
              tailored for personal productivity.
            </p>
            <Link
              href="/onboarding/become-agent"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Become an Agent
            </Link>
          </div>
        )}

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-medium text-gray-900">Create Workspace</h2>
          <p className="mt-2 text-sm text-gray-600">
            Set up a company workspace, invite team members, and manage
            transactions from a single hub.
          </p>
          <Link
            href="/authentication/signup"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Get Started
          </Link>
        </div>
      </section>

      {hasB2C && (
        <div className="rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          You&apos;re already enrolled as an agent. Use the company workspace option
          if you need to onboard a brokerage.
        </div>
      )}

      <div className="text-sm text-gray-500">
        Need help?{' '}
        <Link
          href="mailto:support@contre.ai"
          className="font-medium text-gray-700 underline hover:text-gray-900"
        >
          Contact support
        </Link>
      </div>
    </main>
  )
}

