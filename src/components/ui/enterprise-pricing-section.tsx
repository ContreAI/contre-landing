"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useMemo } from "react"
import { Building2, Users, Mail, MapPin, User, Calculator } from "lucide-react"
import Link from "next/link"

interface PricingTier {
  maxDeals: number
  pricePerDeal: number
  monthlyTotal: number
  overageRate: number
  label: string
}

const pricingTiers: PricingTier[] = [
  { maxDeals: 20, pricePerDeal: 30, monthlyTotal: 600, overageRate: 30, label: "Starter" },
  { maxDeals: 50, pricePerDeal: 25, monthlyTotal: 1250, overageRate: 25, label: "Growth" },
  { maxDeals: 100, pricePerDeal: 20, monthlyTotal: 2000, overageRate: 15, label: "Professional" },
]

// Slider positions map to these values
const sliderValues = [1, 20, 50, 100, 120] // 120 represents "100+"

export function EnterprisePricingSection() {
  const [sliderPosition, setSliderPosition] = useState(1) // 0-4, default to 20 (position 1)
  const [agentCount, setAgentCount] = useState("")
  const [brokerageName, setBrokerageName] = useState("")
  const [contactName, setContactName] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("")

  const transactionVolume = sliderValues[sliderPosition]

  const currentTier = useMemo(() => {
    if (transactionVolume > 100) return null // Custom pricing
    if (transactionVolume <= 20) return pricingTiers[0]
    if (transactionVolume <= 50) return pricingTiers[1]
    return pricingTiers[2]
  }, [transactionVolume])

  const isCustomPricing = transactionVolume > 100

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 via-[#9DBFBF]/10 to-slate-100">
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
            For Brokerages & Teams
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-['Manrope'] max-w-2xl mx-auto">
            Volume-based pricing that scales with your business. The more you do, the more you save.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Quiz Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
          >
            <h3 className="text-2xl font-semibold font-['Bebas_Neue'] text-[#37474F] mb-6 flex items-center gap-3">
              <Calculator className="w-6 h-6 text-[#607D3B]" />
              Get Your Custom Quote
            </h3>

            {/* Transaction Volume Slider */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 font-['Manrope'] mb-3">
                Monthly Transaction Volume
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-6
                    [&::-webkit-slider-thumb]:h-6
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-gradient-to-r
                    [&::-webkit-slider-thumb]:from-[#264E36]
                    [&::-webkit-slider-thumb]:to-[#607D3B]
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:transition-transform
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-moz-range-thumb]:w-6
                    [&::-moz-range-thumb]:h-6
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-gradient-to-r
                    [&::-moz-range-thumb]:from-[#264E36]
                    [&::-moz-range-thumb]:to-[#607D3B]
                    [&::-moz-range-thumb]:border-0
                    [&::-moz-range-thumb]:shadow-lg
                    [&::-moz-range-thumb]:cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 font-['Manrope'] mt-2">
                  <span>1</span>
                  <span>20</span>
                  <span>50</span>
                  <span>100</span>
                  <span>100+</span>
                </div>
              </div>
              <div className="mt-3 text-center">
                <span className="text-3xl font-bold font-['Bebas_Neue'] text-[#264E36]">
                  {transactionVolume > 100 ? "100+" : transactionVolume}
                </span>
                <span className="text-slate-500 font-['Manrope'] ml-2">
                  transactions/month
                </span>
              </div>
            </div>

            {/* Agent Count */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 font-['Manrope'] mb-2">
                <Users className="w-4 h-4 inline mr-2 text-[#607D3B]" />
                Number of Agents
              </label>
              <input
                type="number"
                value={agentCount}
                onChange={(e) => setAgentCount(e.target.value)}
                placeholder="e.g., 25"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 font-['Manrope'] text-slate-700
                  focus:outline-none focus:ring-2 focus:ring-[#607D3B]/50 focus:border-[#607D3B]
                  transition-all duration-200"
              />
              <p className="text-xs text-slate-400 font-['Manrope'] mt-1 italic">
                We don't charge per seat — only per transaction
              </p>
            </div>

            {/* Brokerage Name */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 font-['Manrope'] mb-2">
                <Building2 className="w-4 h-4 inline mr-2 text-[#607D3B]" />
                Brokerage Name
              </label>
              <input
                type="text"
                value={brokerageName}
                onChange={(e) => setBrokerageName(e.target.value)}
                placeholder="Your Brokerage"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 font-['Manrope'] text-slate-700
                  focus:outline-none focus:ring-2 focus:ring-[#607D3B]/50 focus:border-[#607D3B]
                  transition-all duration-200"
              />
            </div>

            {/* Contact Name */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 font-['Manrope'] mb-2">
                <User className="w-4 h-4 inline mr-2 text-[#607D3B]" />
                Contact Name
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 font-['Manrope'] text-slate-700
                  focus:outline-none focus:ring-2 focus:ring-[#607D3B]/50 focus:border-[#607D3B]
                  transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 font-['Manrope'] mb-2">
                <Mail className="w-4 h-4 inline mr-2 text-[#607D3B]" />
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@brokerage.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 font-['Manrope'] text-slate-700
                  focus:outline-none focus:ring-2 focus:ring-[#607D3B]/50 focus:border-[#607D3B]
                  transition-all duration-200"
              />
            </div>

            {/* City, State */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 font-['Manrope'] mb-2">
                <MapPin className="w-4 h-4 inline mr-2 text-[#607D3B]" />
                City, State
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Coeur d'Alene, ID"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 font-['Manrope'] text-slate-700
                  focus:outline-none focus:ring-2 focus:ring-[#607D3B]/50 focus:border-[#607D3B]
                  transition-all duration-200"
              />
            </div>
          </motion.div>

          {/* Right: Dynamic Pricing Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-[#264E36] via-[#37574a] to-[#607D3B] rounded-3xl p-8 text-white shadow-2xl flex-grow">
              <AnimatePresence mode="wait">
                {isCustomPricing ? (
                  <motion.div
                    key="custom"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <h3 className="text-3xl font-semibold font-['Bebas_Neue'] mb-4">
                      Enterprise Volume
                    </h3>
                    <p className="text-white/80 font-['Manrope'] mb-6">
                      For high-volume brokerages processing over 100 transactions per month, we offer custom pricing tailored to your needs.
                    </p>
                    <div className="text-center my-8">
                      <span className="text-5xl font-bold font-['Bebas_Neue']">
                        Custom Pricing
                      </span>
                      <p className="text-white/70 font-['Manrope'] mt-2">
                        Let's build a plan that works for you
                      </p>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      <li className="flex items-center gap-3 text-white/90 font-['Manrope']">
                        <span className="text-[#9DBFBF]">✓</span>
                        Volume discounts available
                      </li>
                      <li className="flex items-center gap-3 text-white/90 font-['Manrope']">
                        <span className="text-[#9DBFBF]">✓</span>
                        Dedicated account manager
                      </li>
                      <li className="flex items-center gap-3 text-white/90 font-['Manrope']">
                        <span className="text-[#9DBFBF]">✓</span>
                        Custom integrations
                      </li>
                      <li className="flex items-center gap-3 text-white/90 font-['Manrope']">
                        <span className="text-[#9DBFBF]">✓</span>
                        Priority support
                      </li>
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key={currentTier?.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-semibold font-['Bebas_Neue']">
                        {currentTier?.label} Plan
                      </h3>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-['Manrope']">
                        Up to {currentTier?.maxDeals} deals/mo
                      </span>
                    </div>

                    <div className="text-center my-8">
                      <motion.span
                        key={currentTier?.monthlyTotal}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-6xl font-bold font-['Bebas_Neue']"
                      >
                        ${currentTier?.monthlyTotal.toLocaleString()}
                      </motion.span>
                      <span className="text-xl text-white/70 font-['Manrope']">/month</span>
                      <p className="text-white/70 font-['Manrope'] mt-2">
                        ${currentTier?.pricePerDeal}/transaction
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow">
                      <li className="flex items-center gap-3 text-white/90 font-['Manrope']">
                        <span className="text-[#9DBFBF]">✓</span>
                        {currentTier?.maxDeals} transactions included
                      </li>
                      <li className="flex items-center gap-3 text-white/90 font-['Manrope']">
                        <span className="text-[#9DBFBF]">✓</span>
                        Overage: ${currentTier?.overageRate}/additional transaction
                      </li>
                      <li className="flex items-center gap-3 text-white/90 font-['Manrope']">
                        <span className="text-[#9DBFBF]">✓</span>
                        Brokerage dashboard & oversight
                      </li>
                      <li className="flex items-center gap-3 text-white/90 font-['Manrope']">
                        <span className="text-[#9DBFBF]">✓</span>
                        Custom training on your standards
                      </li>
                      <li className="flex items-center gap-3 text-white/90 font-['Manrope']">
                        <span className="text-[#9DBFBF]">✓</span>
                        Unlimited agents (no per-seat fee)
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTA Button */}
              <Link href="/authentication/signup" className="block mt-auto">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full rounded-xl py-6 text-base font-semibold font-['Manrope']
                    bg-white text-[#264E36] hover:bg-slate-100
                    transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <motion.span
                    className="flex items-center justify-center gap-2"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {isCustomPricing ? "Contact Us" : "Get Started"}
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

            {/* Pricing Tiers Quick Reference */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              {pricingTiers.map((tier) => (
                <div
                  key={tier.label}
                  className={`p-4 rounded-xl text-center transition-all duration-300 cursor-pointer
                    ${currentTier?.label === tier.label && !isCustomPricing
                      ? "bg-[#264E36] text-white shadow-lg"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-[#9DBFBF]"
                    }`}
                  onClick={() => setSliderPosition(sliderValues.indexOf(tier.maxDeals))}
                >
                  <p className="text-xs font-['Manrope'] opacity-70">Up to</p>
                  <p className="text-xl font-bold font-['Bebas_Neue']">{tier.maxDeals}</p>
                  <p className="text-xs font-['Manrope']">deals/mo</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-slate-500 font-['Manrope'] text-sm mt-12 max-w-2xl mx-auto"
        >
          All brokerage plans include custom training on your forms, unlimited agent seats,
          brokerage-wide dashboard, and priority support. No hidden fees.
        </motion.p>
      </div>
    </section>
  )
}
