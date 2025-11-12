import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getAdminClient } from '@/lib/supabase/admin'
import {
  MembershipWithTenant,
  completeAgentOnboarding,
} from './actions'

export default async function BecomeAgentPage() {
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
    .from('memberships')
    .select('tenants(tenant_type)')
    .eq('user_id', user!.id)
    .eq('status', 'active')
    .returns<MembershipWithTenant[]>()

  const hasPersonalTenant = (memberships ?? []).some((membership) => {
    if (!membership) return false
    const tenants = membership.tenants
    if (!tenants) return false
    if (Array.isArray(tenants)) {
      return tenants.some((tenant) => tenant?.tenant_type === 'b2c')
    }
    return tenants.tenant_type === 'b2c'
  })

  if (hasPersonalTenant) {
    redirect('/dashboard')
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-8 px-6 py-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-gray-900">Tell us about your work</h1>
        <p className="text-gray-600">
          This helps us tailor onboarding. You can update this information later.
        </p>
      </section>

      <form action={completeAgentOnboarding} className="space-y-6 rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <div className="space-y-2">
          <label htmlFor="purpose" className="block text-sm font-medium text-gray-900">
            What’s your primary goal for using Contre?
          </label>
          <textarea
            id="purpose"
            name="purpose"
            required
            placeholder="e.g. Automate contract reviews for my personal transactions"
            className="block w-full min-h-[120px] rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="monthly_documents" className="block text-sm font-medium text-gray-900">
            How many documents do you process monthly?
          </label>
          <select
            id="monthly_documents"
            name="monthly_documents"
            required
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="0-25">0 - 25</option>
            <option value="26-50">26 - 50</option>
            <option value="51-100">51 - 100</option>
            <option value="100+">100+</option>
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Complete
        </button>
      </form>
    </main>
  )
}


