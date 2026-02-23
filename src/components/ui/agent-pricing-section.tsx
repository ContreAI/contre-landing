"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star, Clock, ArrowRight, Gift } from "lucide-react"
import { APP_URL } from "@/lib/config"
import { AmbientGlow } from "@/components/ui/ambient-glow"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface PricingTier {
  name: string
  price: string
  priceDetail: string
  period: string
  description: string
  features: string[]
  highlight?: boolean
  badge?: string
  savingsNote?: string
  cta: string
}

const pricingTiers: PricingTier[] = [
  {
    name: "Monthly",
    price: "$34.99",
    priceDetail: "",
    period: "/month",
    description: "1 transaction included per month. Additional transactions at $27.99 each.",
    features: [
      "1 transaction included",
      "Additional transactions: $27.99 each",
      "SkySlope & Lone Wolf integration",
      "AI-powered deadline extraction",
      "One-page contract summaries",
      "Client chatbot (shareable with clients)",
      "Add assistants & TCs at no extra cost",
    ],
    cta: "Start Monthly",
  },
  {
    name: "Annual",
    price: "$26.25",
    priceDetail: "$314.99 billed annually",
    period: "/month",
    description: "12 transactions included. Additional transactions at $22.99 each.",
    features: [
      "12 transactions included (1/month)",
      "Additional transactions: $22.99 each",
      "SkySlope & Lone Wolf integration",
      "AI-powered deadline extraction",
      "One-page contract summaries",
      "Client chatbot (shareable with clients)",
      "Add assistants & TCs at no extra cost",
      "Priority support",
    ],
    highlight: true,
    badge: "Best Value",
    savingsNote: "Save $105/year vs. monthly",
    cta: "Start Annual",
  },
]

export function AgentPricingSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#141312] via-[#181716] to-[#141312] overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <AmbientGlow color="#264E36" position="top-[-200px] right-[-150px]" opacity="opacity-[0.06]" size="w-[500px] h-[500px]" />
      <AmbientGlow color="#9DBFBF" position="bottom-[-150px] left-[-100px]" opacity="opacity-[0.04]" size="w-[400px] h-[400px]" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-white mb-4 tracking-wide">
            For Individual Agents
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-['Manrope'] max-w-2xl mx-auto">
            Choose the plan that works for your business. All plans include our full AI-powered contract analysis.
          </p>
        </motion.div>

        {/* Free Tier Callout */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <a href={`${APP_URL}/authentication/signup`}>
            <div className="relative bg-gradient-to-r from-[#264E36]/20 via-[#264E36]/10 to-[#607D3B]/20 rounded-2xl border border-[#264E36]/30 p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-4 hover:border-[#9DBFBF]/30 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#264E36]/30 flex items-center justify-center flex-shrink-0">
                  <Gift className="w-5 h-5 text-[#9DBFBF]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-['Manrope'] text-white">
                    Start Free — 2 Documents On Us
                  </h3>
                  <p className="text-sm text-slate-400 font-['Manrope']">
                    Try Contre with your real contracts. No credit card, no commitment.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] border border-white/[0.10] text-white text-sm font-semibold font-['Manrope'] group-hover:bg-white/[0.14] transition-all duration-300 flex-shrink-0">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        </motion.div>

        {/* Pricing Cards — Monthly & Annual side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Highlight Glow Effect */}
              {tier.highlight && (
                <div className="absolute -inset-[2px] bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] rounded-2xl opacity-40 blur-md" />
              )}

              {/* Card */}
              <div
                className={`relative h-full bg-white/[0.03] backdrop-blur-md rounded-2xl p-8 flex flex-col
                  ${tier.highlight
                    ? "border border-[#9DBFBF]/30 shadow-[0_4px_24px_rgba(157,191,191,0.12)]"
                    : "border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.14] hover:shadow-[0_4px_24px_rgba(157,191,191,0.06)]"
                  }
                  transition-all duration-300`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-[#264E36] to-[#607D3B] text-white text-sm font-semibold font-['Manrope'] rounded-full shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-lg font-semibold font-['Manrope'] text-slate-300 mb-2 mt-2 uppercase tracking-wider">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-5xl font-bold font-['Bebas_Neue'] text-[#9DBFBF]">
                    {tier.price}
                  </span>
                  <span className="text-lg text-slate-500 font-['Manrope']">
                    {tier.period}
                  </span>
                </div>

                {/* Billing detail & savings */}
                <div className="mb-5 min-h-[40px]">
                  {tier.priceDetail && (
                    <p className="text-sm text-slate-500 font-['Manrope']">
                      {tier.priceDetail}
                    </p>
                  )}
                  {tier.savingsNote && (
                    <p className="text-sm font-semibold text-[#607D3B] font-['Manrope'] mt-0.5">
                      {tier.savingsNote}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-400 font-['Manrope'] text-sm mb-6">
                  {tier.description}
                </p>

                {/* Unique Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#9DBFBF] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-400 font-['Manrope'] text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a href={`${APP_URL}/authentication/signup`} className="block mt-auto">
                  <Button
                    variant="ghost"
                    size="lg"
                    className={`w-full rounded-xl py-6 text-base font-semibold font-['Manrope']
                      transition-all duration-300
                      ${tier.highlight
                        ? "bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#4a6b2f] text-white hover:from-[#1a3624] hover:via-[#4a5f2d] hover:to-[#3d5a28] shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        : "bg-white/[0.06] text-white border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.14]"
                      }`}
                  >
                    <motion.span
                      className="flex items-center justify-center gap-2"
                      whileHover={prefersReduced ? undefined : { x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tier.cta}
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contract note — transparent, not hidden */}
        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0 }}
          whileInView={prefersReduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { delay: 0.3, duration: 0.6 }}
          className="text-center text-slate-500 font-['Manrope'] text-sm mt-6 max-w-xl mx-auto"
        >
          Monthly plans include a 3-month onboarding period, then continue month-to-month.
          Cancel anytime after with 30 days notice.
        </motion.p>

        {/* Per Transaction — standalone callout */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { delay: 0.45, duration: 0.6 }}
          className="mt-14 max-w-4xl mx-auto"
        >
          <div className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-[#9DBFBF]" />
                <h3 className="text-lg font-semibold font-['Manrope'] text-white uppercase tracking-wider">
                  Pay Per Transaction
                </h3>
              </div>
              <p className="text-slate-400 font-['Manrope'] text-sm">
                No subscription, no commitment. Includes full analysis, one-page summary, client chatbot, and SkySlope/Lone Wolf integration.
              </p>
            </div>
            <div className="flex items-center gap-6 flex-shrink-0">
              <div className="text-right">
                <span className="text-4xl font-bold font-['Bebas_Neue'] text-[#9DBFBF]">$49.99</span>
                <span className="text-slate-500 font-['Manrope'] ml-1">/transaction</span>
              </div>
              <a href={`${APP_URL}/authentication/signup`}>
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-xl px-6 py-6 text-base font-semibold font-['Manrope']
                    bg-white/[0.06] text-white border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.14]
                    transition-all duration-300"
                >
                  Buy Single
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0 }}
          whileInView={prefersReduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { delay: 0.55, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-500 font-['Manrope']"
        >
          <span className="flex items-center gap-2">
            <span className="text-[#9DBFBF]">✓</span>
            2 free documents — no credit card
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#9DBFBF]">✓</span>
            Cancel anytime after onboarding
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#9DBFBF]">✓</span>
            No setup fees
          </span>
        </motion.div>

        {/* Integration note for agents */}
        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0 }}
          whileInView={prefersReduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { delay: 0.6, duration: 0.6 }}
          className="text-center text-slate-500 font-['Manrope'] text-xs mt-6 max-w-lg mx-auto"
        >
          Works with your existing workflow — integrates directly with SkySlope and Lone Wolf via API.
          Reports are emailed to you automatically.
        </motion.p>
      </div>
    </section>
  )
}
