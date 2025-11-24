import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getAdminClient } from '@/lib/supabase/admin'
import { autoCompleteAgentOnboarding } from './become-agent/actions'

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
    .from('memberships')
    .select('tenant_id, tenants(tenant_type, name)')
    .eq('user_id', user!.id)
    .eq('status', 'active')

  const activeMemberships =
    (memberships ?? []) as {
      tenant_id: string
      tenants:
        | { tenant_type: string | null; name: string | null }
        | { tenant_type: string | null; name: string | null }[]
        | null
    }[]
  const hasB2C = activeMemberships.some((membership) => {
    const tenants = membership.tenants
    if (!tenants) return false
    const tenantArray = Array.isArray(tenants) ? tenants : [tenants]
    return tenantArray.some((tenant) => tenant?.tenant_type === 'b2c')
  })

  const cards: Array<{
    title: string
    description: string
    price: string
    icon: string
    href?: string
    disabled?: boolean
    isAutoSignup?: boolean
  }> = [
    {
      title: 'Individual Agent',
      description: 'Perfect for agents who want immediate access to Contre.',
      price: 'Get started at $49.99/mo with instant access',
      icon: '👤',
      href: undefined,
      disabled: hasB2C,
      isAutoSignup: !hasB2C,
    },
    {
      title: 'My Brokerage',
      description: 'Purpose-built for teams who need oversight across every deal.',
      price: 'Custom solutions starting at $1,500/mo',
      icon: '🏢',
      href: 'mailto:support@contre.ai?subject=Contre%20Brokerage%20Onboarding',
    },
  ]

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-16">
      <div className="w-full max-w-4xl rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl backdrop-blur">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Who are you signing up for?</h1>
          <p className="mt-2 text-base text-slate-600">Choose your path to get started</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map((card) => {
            const isDisabled = Boolean(card.disabled)
            const cardContent = (
              <>
                <span className="text-3xl">{card.icon}</span>
                <h2 className="mt-4 text-xl font-semibold text-slate-900">{card.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{card.description}</p>
                <p className="mt-4 text-sm font-medium text-indigo-600">{card.price}</p>
                {card.isAutoSignup ? (
                  <button
                    type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Select
                  </button>
                ) : (
                  <span
                    className={[
                      'mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition',
                      isDisabled
                        ? 'bg-slate-200 text-slate-500'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    ].join(' ')}
                  >
                    {isDisabled ? 'Already Activated' : 'Select'}
                  </span>
                )}
              </>
            )

            if (card.isAutoSignup) {
              return (
                <form key={card.title} action={autoCompleteAgentOnboarding}>
                  <div
                    className={[
                      'relative flex h-full flex-col rounded-2xl border p-6 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer',
                      isDisabled
                        ? 'border-slate-200 bg-slate-50 text-slate-500'
                        : card.title === 'Individual Agent' && !hasB2C
                          ? 'border-indigo-200 bg-indigo-50 ring-2 ring-indigo-200'
                          : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow'
                    ].join(' ')}
                  >
                    {cardContent}
                  </div>
                </form>
              )
            }

            if (!card.href || isDisabled) {
              return (
                <div
                  key={card.title}
                  aria-disabled={isDisabled}
                  className={[
                    'relative flex h-full flex-col rounded-2xl border p-6 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
                    isDisabled
                      ? 'border-slate-200 bg-slate-50 text-slate-500'
                      : card.title === 'Individual Agent' && !hasB2C
                        ? 'border-indigo-200 bg-indigo-50 ring-2 ring-indigo-200'
                        : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow'
                  ].join(' ')}
                >
                  {cardContent}
                </div>
              )
            }

            return (
              <Link key={card.title} href={card.href} className="block focus:outline-none">
                <div
                  className={[
                    'relative flex h-full flex-col rounded-2xl border p-6 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
                    isDisabled
                      ? 'border-slate-200 bg-slate-50 text-slate-500'
                      : card.title === 'Individual Agent' && !hasB2C
                        ? 'border-indigo-200 bg-indigo-50 ring-2 ring-indigo-200'
                        : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow'
                  ].join(' ')}
                >
                  {cardContent}
                </div>
              </Link>
            )
          })}
        </div>

        {hasB2C && (
          <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-4 text-sm text-emerald-700">
            You&apos;re already enrolled as an agent. Reach out to our team if you&apos;d like to
            bring your brokerage onboard.
          </div>
        )}
      </div>
    </main>
  )
}

