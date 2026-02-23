"use client"

import { motion } from "framer-motion"
import { DollarSign } from "lucide-react"
import { AmbientGlow } from "@/components/ui/ambient-glow"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function PricingHero() {
  const prefersReduced = useReducedMotion()

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D1A14] via-[#112A1E] to-[#141312]">
      {/* Ambient glow effects */}
      <AmbientGlow color="#264E36" position="top-[-200px] left-1/2 -translate-x-1/2" opacity="opacity-[0.12]" size="w-[600px] h-[600px]" />
      <AmbientGlow color="#607D3B" position="top-[-50px] right-[-150px]" opacity="opacity-[0.07]" size="w-[400px] h-[400px]" />

      {/* Subtle curved decorative arc */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[120%] h-[400px] rounded-[50%] border border-[#9DBFBF]/[0.04] pointer-events-none" aria-hidden="true" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center py-20 md:py-28 pt-32 md:pt-36">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.10] rounded-full px-4 py-1.5 mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
          >
            <DollarSign className="w-3.5 h-3.5 text-[#9DBFBF]" aria-hidden="true" />
            <span className="text-xs font-['Manrope'] font-semibold text-[#9DBFBF]">Simple, Transparent Pricing</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
            animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReduced ? { duration: 0 } : { delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl font-black mb-5 tracking-normal leading-none font-['Bebas_Neue'] text-white"
          >
            Your Time Back. Your Deals Protected.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={prefersReduced ? undefined : { opacity: 0 }}
            animate={prefersReduced ? undefined : { opacity: 1 }}
            transition={prefersReduced ? { duration: 0 } : { delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 font-['Manrope'] font-light tracking-wide max-w-2xl mx-auto"
          >
            Start free with 2 documents — no credit card required. Upgrade when you&apos;re ready.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
