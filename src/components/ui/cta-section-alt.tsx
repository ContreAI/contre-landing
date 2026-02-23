"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AmbientGlow } from "@/components/ui/ambient-glow"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { APP_URL } from "@/lib/config"
import { trackCTAClick } from "@/lib/gtag"

export function CTASectionAlt() {
  const prefersReduced = useReducedMotion();
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#112A1E] via-[#0D1A14] to-[#0D1A14]">
      {/* Radial spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(157,191,191,0.06)_0%,_transparent_70%)]" />
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9DBFBF]/12 to-transparent" />
      <AmbientGlow color="#264E36" position="top-[-100px] left-1/2 -translate-x-1/2" opacity="opacity-[0.18]" size="w-[800px] h-[800px]" />
      <AmbientGlow color="#9DBFBF" position="bottom-[-200px] right-[-100px]" opacity="opacity-[0.12]" size="w-[500px] h-[500px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-white mb-6">
            Protect Every Deal. Automatically.
          </h2>

          <p className="text-lg md:text-xl text-slate-400 font-['Manrope'] max-w-2xl mx-auto mb-10">
            Stop scrolling through 50 pages at 10pm. Contre already did.
          </p>

          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, scale: 0.8 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={prefersReduced ? { duration: 0 } : { delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-block group relative"
          >
            <div className="absolute -inset-1.5 bg-white rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            <Button
              variant="ghost"
              size="lg"
              className="relative rounded-2xl px-12 py-6 text-lg font-semibold
                          bg-white hover:bg-gray-100
                          text-[#0D1A14] transition-all duration-200
                          group-hover:-translate-y-1 shadow-soft-lg group-hover:shadow-[0_12px_48px_rgba(255,255,255,0.2)]
                          border-0 font-['Manrope']"
              onClick={() => { trackCTAClick('Upload Your Contract Free'); window.open(`${APP_URL}/authentication/signup`, '_blank') }}
            >
              <motion.span
                className="flex items-center gap-3"
                whileHover={prefersReduced ? undefined : { x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative">
                  Upload Your Contract Free
                </span>
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

          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0 }}
            whileInView={prefersReduced ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            transition={prefersReduced ? { duration: 0 } : { delay: 0.5, duration: 1 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-slate-500 font-['Manrope']"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#9DBFBF]">✓</span>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#9DBFBF]">✓</span>
              Takes 2 minutes
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#9DBFBF]">✓</span>
              Cancel anytime
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
