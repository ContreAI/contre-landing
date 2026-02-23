"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useMemo } from "react"
import { Building2, Mail, User, Calculator, Send, CheckCircle, AlertCircle, Users, ArrowRight, Zap } from "lucide-react"
import { APP_URL } from "@/lib/config"
import Image from "next/image"
import { AmbientGlow } from "@/components/ui/ambient-glow"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

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

type VolumeOption = "20" | "50" | "100" | "custom"

const volumeOptions: { value: VolumeOption; label: string; sublabel: string }[] = [
  { value: "20", label: "Up to 20", sublabel: "deals/mo" },
  { value: "50", label: "Up to 50", sublabel: "deals/mo" },
  { value: "100", label: "Up to 100", sublabel: "deals/mo" },
  { value: "custom", label: "100+", sublabel: "custom" },
]

export function EnterprisePricingSection() {
  const prefersReduced = useReducedMotion()
  const [selectedVolume, setSelectedVolume] = useState<VolumeOption>("20")
  const [brokerageName, setBrokerageName] = useState("")
  const [contactName, setContactName] = useState("")
  const [email, setEmail] = useState("")
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle")

  const currentTier = useMemo(() => {
    if (selectedVolume === "custom") return null
    const vol = Number(selectedVolume)
    if (vol <= 20) return pricingTiers[0]
    if (vol <= 50) return pricingTiers[1]
    return pricingTiers[2]
  }, [selectedVolume])

  const isCustomPricing = selectedVolume === "custom"

  const inputClasses = `w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.10] font-['Manrope'] text-white placeholder:text-slate-500
    focus:outline-none focus:ring-2 focus:ring-[#9DBFBF]/30 focus:border-[#9DBFBF]/40
    transition-all duration-200`

  const canSubmit = contactName.trim() && email.trim() && brokerageName.trim() && submitState !== "loading"

  async function handleSubmit() {
    if (!canSubmit) return
    setSubmitState("loading")
    try {
      const res = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          transactionVolume: selectedVolume,
          brokerageName,
          contactName,
          email,
        }),
      })
      if (!res.ok) throw new Error("Failed to send")
      setSubmitState("success")
    } catch {
      setSubmitState("error")
    }
  }

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#131313] via-[#161616] to-[#131313] overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <AmbientGlow color="#9DBFBF" position="top-[-200px] left-[-150px]" opacity="opacity-[0.05]" size="w-[500px] h-[500px]" />
      <AmbientGlow color="#264E36" position="bottom-[-150px] right-[-100px]" opacity="opacity-[0.06]" size="w-[400px] h-[400px]" />

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
            For Brokerages & Teams
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-['Manrope'] max-w-2xl mx-auto">
            Volume-based pricing that scales with your business. The more you do, the more you save. Start with 2 free transactions.
          </p>
        </motion.div>

        {/* API Integration — Zero Adoption Block */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto mb-14"
        >
          <div className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left — message */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-5 h-5 text-[#9DBFBF]" />
                  <h3 className="text-2xl md:text-3xl font-semibold font-['Bebas_Neue'] text-white tracking-wide">
                    Zero Agent Adoption Required
                  </h3>
                </div>
                <p className="text-slate-400 font-['Manrope'] text-sm md:text-base leading-relaxed mb-4">
                  Contre integrates directly with your existing transaction management system via API.
                  When documents hit SkySlope or Lone Wolf, we automatically analyze them and email
                  the reports — your agents don&apos;t need to learn anything new or change their workflow.
                </p>
                <p className="text-xs text-slate-500 font-['Manrope'] uppercase tracking-widest font-semibold">
                  Official API Integration Partners
                </p>
              </div>

              {/* Right — logos */}
              <div className="flex flex-col items-center gap-5 flex-shrink-0">
                <div className="flex items-center gap-6 md:gap-8">
                  <Image
                    src="/skyslope-logo.png"
                    alt="SkySlope"
                    width={140}
                    height={35}
                    className="h-7 md:h-8 w-auto brightness-0 invert opacity-70"
                  />
                  <Image
                    src="/API Integration Badge.png"
                    alt="Official API Integration Partner"
                    width={60}
                    height={75}
                    className="h-14 md:h-16 w-auto drop-shadow-lg"
                  />
                  <Image
                    src="/LW logo.png"
                    alt="Lone Wolf"
                    width={140}
                    height={35}
                    className="h-6 md:h-7 w-auto brightness-0 invert opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Volume Selector — segmented buttons */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-xl bg-white/[0.03] border border-white/[0.08] p-1.5 gap-1.5">
            {volumeOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSelectedVolume(option.value)}
                className={`px-5 py-3 rounded-lg text-center transition-all duration-300 cursor-pointer min-w-[100px]
                  ${selectedVolume === option.value
                    ? "bg-gradient-to-r from-[#264E36] to-[#607D3B] text-white shadow-lg"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
              >
                <p className="text-sm font-semibold font-['Manrope']">{option.label}</p>
                <p className="text-xs font-['Manrope'] opacity-70">{option.sublabel}</p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Dynamic Pricing Display */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, x: -30 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-[#264E36] via-[#37574a] to-[#607D3B] rounded-2xl p-8 text-white shadow-2xl">
              <AnimatePresence mode="wait">
                {isCustomPricing ? (
                  <motion.div
                    key="custom"
                    initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
                    animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                    exit={prefersReduced ? undefined : { opacity: 0, y: -20 }}
                    transition={prefersReduced ? { duration: 0 } : { duration: 0.3 }}
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
                        Let&apos;s build a plan that works for you
                      </p>
                    </div>
                    <ul className="space-y-3 mb-6">
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

                    {/* Start Free CTA — inside custom tier */}
                    <div className="pt-5 border-t border-white/[0.15]">
                      <a href={`${APP_URL}/authentication/signup`} className="block">
                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.10] hover:bg-white/[0.16] transition-all duration-300 group cursor-pointer">
                          <div>
                            <p className="text-sm font-semibold font-['Manrope'] text-white">
                              Start free — 2 transactions on us
                            </p>
                            <p className="text-xs text-white/60 font-['Manrope'] mt-0.5">
                              Upload MLS forms, state regs, and company policies to start training
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
                        </div>
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={currentTier?.label}
                    initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
                    animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                    exit={prefersReduced ? undefined : { opacity: 0, y: -20 }}
                    transition={prefersReduced ? { duration: 0 } : { duration: 0.3 }}
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
                        initial={prefersReduced ? undefined : { scale: 0.8, opacity: 0 }}
                        animate={prefersReduced ? undefined : { scale: 1, opacity: 1 }}
                        className="text-6xl font-bold font-['Bebas_Neue']"
                      >
                        ${currentTier?.monthlyTotal.toLocaleString()}
                      </motion.span>
                      <span className="text-xl text-white/70 font-['Manrope']">/month</span>
                      <p className="text-white/70 font-['Manrope'] mt-2">
                        ${currentTier?.pricePerDeal}/transaction
                      </p>
                    </div>

                    <ul className="space-y-3 mb-6">
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

                    {/* Start Free CTA — inside standard tier */}
                    <div className="pt-5 border-t border-white/[0.15]">
                      <a href={`${APP_URL}/authentication/signup`} className="block">
                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.10] hover:bg-white/[0.16] transition-all duration-300 group cursor-pointer">
                          <div>
                            <p className="text-sm font-semibold font-['Manrope'] text-white">
                              Start free — 2 transactions on us
                            </p>
                            <p className="text-xs text-white/60 font-['Manrope'] mt-0.5">
                              Upload MLS forms, state regs, and company policies to start training
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Quote Form + Team Note */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, x: 30 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
            className="bg-white/[0.03] backdrop-blur-md rounded-2xl p-8 border border-white/[0.08]"
          >
            {/* Team members callout */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#264E36]/15 border border-[#264E36]/20 mb-8">
              <Users className="w-5 h-5 text-[#9DBFBF] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white font-['Manrope']">
                  Add your whole team at no extra cost
                </p>
                <p className="text-xs text-slate-400 font-['Manrope'] mt-0.5">
                  Agents, assistants, TCs, and admins — unlimited seats. You only pay per transaction.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold font-['Bebas_Neue'] text-white mb-2 flex items-center gap-3">
              <Calculator className="w-6 h-6 text-[#9DBFBF]" />
              Get Your Custom Quote
            </h3>
            <p className="text-sm text-slate-500 font-['Manrope'] mb-8">
              Tell us about your brokerage and we&apos;ll have a custom quote to you within 24 hours. Start with 2 free transactions.
            </p>

            {/* Brokerage Name */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-300 font-['Manrope'] mb-2">
                <Building2 className="w-4 h-4 inline mr-2 text-[#9DBFBF]" />
                Brokerage Name
              </label>
              <input
                type="text"
                value={brokerageName}
                onChange={(e) => setBrokerageName(e.target.value)}
                placeholder="Your Brokerage"
                className={inputClasses}
              />
            </div>

            {/* Contact Name */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-300 font-['Manrope'] mb-2">
                <User className="w-4 h-4 inline mr-2 text-[#9DBFBF]" />
                Your Name
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Full Name"
                className={inputClasses}
              />
            </div>

            {/* Email */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-300 font-['Manrope'] mb-2">
                <Mail className="w-4 h-4 inline mr-2 text-[#9DBFBF]" />
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@brokerage.com"
                className={inputClasses}
              />
            </div>

            {/* Submit Button */}
            {submitState === "success" ? (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#264E36]/20 border border-[#264E36]/30">
                <CheckCircle className="w-5 h-5 text-[#9DBFBF] flex-shrink-0" />
                <p className="text-sm font-['Manrope'] text-[#9DBFBF]">
                  Quote request sent! We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="relative">
                  {/* Glow behind button */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] rounded-2xl opacity-30 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
                  <button
                    type="button"
                    disabled={!canSubmit}
                    onClick={handleSubmit}
                    className="relative w-full rounded-xl py-5 text-base font-semibold font-['Manrope'] inline-flex items-center justify-center gap-2
                      bg-white text-[#264E36]
                      hover:bg-slate-100 hover:-translate-y-0.5
                      shadow-lg hover:shadow-xl
                      transition-all duration-300 cursor-pointer
                      disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    {submitState === "loading" ? "Sending..." : "Request Your Custom Quote"}
                  </button>
                </div>
                {submitState === "error" && (
                  <div className="flex items-center gap-3 mt-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <p className="text-sm font-['Manrope'] text-red-400">
                      Something went wrong. Please email <a href="mailto:ct@contre.ai" className="underline">ct@contre.ai</a> directly.
                    </p>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0 }}
          whileInView={prefersReduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { delay: 0.6, duration: 0.6 }}
          className="text-center text-slate-500 font-['Manrope'] text-sm mt-12 max-w-2xl mx-auto"
        >
          All brokerage plans include custom training on your forms, unlimited team members
          (agents, assistants, TCs, admins), brokerage-wide dashboard, and priority support.
          No per-seat fees. No hidden fees.
        </motion.p>
      </div>
    </section>
  )
}
