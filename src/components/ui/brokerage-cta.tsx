"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AmbientGlow } from "@/components/ui/ambient-glow"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { APP_URL } from "@/lib/config"

const benefits = [
  "Risk score benchmarked against top-performing brokerages",
  "Your top 3 vulnerability points ranked by impact",
  "60-day action plan to fix them",
]

export function BrokerageCTA() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#264E36] via-[#1a3624] to-[#0D1A14] overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9DBFBF]/15 to-transparent" />

      {/* Radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(157,191,191,0.08)_0%,_transparent_55%)]" aria-hidden="true" />

      {/* Ambient glows */}
      <AmbientGlow color="#9DBFBF" position="top-[-200px] left-1/2 -translate-x-1/2" opacity="opacity-[0.10]" size="w-[700px] h-[500px]" />
      <AmbientGlow color="#264E36" position="bottom-[-150px] right-[-100px]" opacity="opacity-[0.08]" size="w-[400px] h-[400px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
        >
          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-white tracking-wide mb-6">
            See Where Your Transactions Are Most Vulnerable
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 font-['Manrope'] max-w-2xl mx-auto mb-10 leading-relaxed">
            Get a free Transaction Risk Assessment. We grade your brokerage&apos;s current process and show you exactly where deals are at risk — whether you work with us or not.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-3 mb-10"
        >
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-2.5 text-sm font-['Manrope'] text-slate-300">
              <span className="text-[#9DBFBF] flex-shrink-0" aria-hidden="true">✓</span>
              {benefit}
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, scale: 0.9 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
          className="inline-block group relative"
        >
          <div className="absolute -inset-1.5 bg-white rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
          <Button
            variant="ghost"
            size="lg"
            className="relative rounded-2xl px-12 py-7 text-lg font-semibold
                        bg-white hover:bg-gray-100
                        text-[#264E36] transition-all duration-200
                        group-hover:-translate-y-1 group-hover:shadow-[0_12px_48px_rgba(255,255,255,0.2)]
                        border-0 shadow-lg font-['Manrope']"
            onClick={() => window.open(`${APP_URL}/authentication/signup`, '_blank')}
          >
            <motion.span
              className="flex items-center gap-3"
              whileHover={prefersReduced ? undefined : { x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Get My Free Assessment</span>
              <motion.span
                animate={prefersReduced ? undefined : { x: [0, 4, 0] }}
                transition={prefersReduced ? { duration: 0 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-xl"
                aria-hidden="true"
              >
                →
              </motion.span>
            </motion.span>
          </Button>
        </motion.div>

        {/* Friction reducer */}
        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0 }}
          whileInView={prefersReduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.5 }}
          className="text-sm text-slate-500 font-['Manrope'] mt-6"
        >
          3-minute assessment. No credit card. Actionable insights you can use today.
        </motion.p>
      </div>
    </section>
  )
}
