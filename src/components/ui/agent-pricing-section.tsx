"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlight?: boolean
  badge?: string
  cta: string
}

const pricingTiers: PricingTier[] = [
  {
    name: "Monthly",
    price: "$34.99",
    period: "/month",
    description: "1 transaction included. Need more? Add extras at $27.99 each.",
    features: [
      "1 transaction included",
      "Additional transactions: $27.99 each",
      "AI-powered deadline extraction",
      "One-page summaries",
      "Client chatbot access (shareable)",
      "3-month contract",
    ],
    cta: "Start Monthly",
  },
  {
    name: "Annual",
    price: "$314.99",
    period: "/year",
    description: "Best value — 12 transactions included, extras at $22.99 each.",
    features: [
      "12 transactions included (1/month)",
      "Additional transactions: $22.99 each",
      "AI-powered deadline extraction",
      "One-page summaries",
      "Client chatbot access (shareable)",
      "Priority support",
    ],
    highlight: true,
    badge: "Best Value",
    cta: "Start Annual",
  },
  {
    name: "Per Transaction",
    price: "$49.99",
    period: "/transaction",
    description: "Pay only when you need it — no commitment required.",
    features: [
      "Single transaction analysis",
      "AI-powered deadline extraction",
      "One-page summary",
      "Client chatbot access (shareable)",
      "No subscription required",
      "No contract",
    ],
    cta: "Buy Single",
  },
]

export function AgentPricingSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-[#264E36] mb-4">
            For Individual Agents
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-['Manrope'] max-w-2xl mx-auto">
            Choose the plan that works for your business. All plans include our full AI-powered contract analysis.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Highlight Glow Effect */}
              {tier.highlight && (
                <div className="absolute -inset-[2px] bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] rounded-3xl opacity-75 blur-sm" />
              )}

              {/* Card */}
              <div
                className={`relative h-full bg-white rounded-3xl p-8 flex flex-col
                  ${tier.highlight
                    ? "border-2 border-[#264E36] shadow-2xl"
                    : "border border-slate-200 hover:border-[#9DBFBF] hover:shadow-xl"
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
                <h3 className="text-2xl font-semibold font-['Bebas_Neue'] text-[#37474F] mb-2 mt-2">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-5xl font-bold font-['Bebas_Neue'] text-[#264E36]">
                    {tier.price}
                  </span>
                  <span className="text-lg text-slate-500 font-['Manrope']">
                    {tier.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 font-['Manrope'] text-sm mb-6 min-h-[48px]">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#607D3B] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 font-['Manrope'] text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/authentication/signup" className="block">
                  <Button
                    variant="ghost"
                    size="lg"
                    className={`w-full rounded-xl py-6 text-base font-semibold font-['Manrope']
                      transition-all duration-300
                      ${tier.highlight
                        ? "bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#4a6b2f] text-white hover:from-[#1a3624] hover:via-[#4a5f2d] hover:to-[#3d5a28] shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        : "bg-slate-100 text-[#264E36] hover:bg-[#264E36] hover:text-white"
                      }`}
                  >
                    <motion.span
                      className="flex items-center justify-center gap-2"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tier.cta}
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </motion.span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-500 font-['Manrope']"
        >
          <span className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            3-month minimum on subscriptions
          </span>
          <span className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            Cancel anytime after minimum
          </span>
          <span className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            No setup fees
          </span>
        </motion.div>
      </div>
    </section>
  )
}
