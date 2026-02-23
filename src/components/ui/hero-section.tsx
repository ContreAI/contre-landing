"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, ChevronDown } from "lucide-react"
import { useEffect } from "react"
import { AmbientGlow } from "@/components/ui/ambient-glow"
import { DottedSurface } from "@/components/ui/dotted-surface"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { APP_URL } from "@/lib/config"

function AnimatedCounter({ target, duration = 1.5, delay = 0, prefersReduced = false }: { target: number; duration?: number; delay?: number; prefersReduced?: boolean }) {
  const count = useMotionValue(prefersReduced ? target : 0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (prefersReduced) return
    const controls = animate(count, target, {
      duration,
      delay,
      ease: "easeOut",
    })
    return controls.stop
  }, [count, target, duration, delay, prefersReduced])

  return <motion.span>{rounded}</motion.span>
}

export function HeroSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center bg-[#0D1A14] overflow-hidden">
      {/* Three.js animated dotted surface background */}
      <DottedSurface className="absolute top-0 left-0 right-0 h-[calc(100vh-64px)] opacity-40" />

      {/* Ambient glow effects */}
      <AmbientGlow color="#264E36" position="top-[-300px] left-1/2 -translate-x-1/2" opacity="opacity-[0.15]" size="w-[800px] h-[800px]" />
      <AmbientGlow color="#607D3B" position="top-[-100px] right-[-200px]" opacity="opacity-[0.10]" size="w-[500px] h-[500px]" />
      <AmbientGlow color="#9DBFBF" position="bottom-[-100px] left-[-150px]" opacity="opacity-[0.12]" size="w-[400px] h-[400px]" />

      {/* Subtle curved decorative arc */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[120%] h-[500px] rounded-[50%] border border-white/[0.04] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 lg:py-24">
        {/* Two-column layout on lg+ */}
        <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-12 xl:gap-16 lg:items-center">

          {/* Left column: Copy + CTA */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
            animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
              animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.10] rounded-full px-4 py-1.5 mb-6"
            >
              <Users className="w-3.5 h-3.5 text-[#9DBFBF]" aria-hidden="true" />
              <span className="text-xs font-['Manrope'] font-semibold text-slate-400">Built by Former Agents &amp; Brokers</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-['Bebas_Neue'] text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-wide leading-[1.05] mb-6">
              Protect Your Deals{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9DBFBF] via-[#607D3B] to-[#9DBFBF]">
                in 60 Seconds
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-400 font-['Manrope'] leading-relaxed mb-8 max-w-lg">
              Upload any contract, HOA, or title report. Get every deadline, red flag, and critical detail — one page, nothing missed.
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-6">
              {/* Primary CTA */}
              <div className="inline-block group relative">
                {/* Hover glow */}
                <div className="absolute -inset-1.5 bg-white rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                <Button
                  variant="ghost"
                  size="lg"
                  className="relative rounded-2xl px-10 py-7 text-lg font-semibold
                              bg-white hover:bg-gray-100
                              text-[#0D1A14] transition-all duration-200
                              group-hover:-translate-y-1 group-hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)]
                              border-0 shadow-lg font-['Manrope']"
                  onClick={() => window.open(`${APP_URL}/authentication/signup`, '_blank')}
                >
                  <motion.span
                    className="flex items-center gap-3"
                    whileHover={prefersReduced ? undefined : { x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>Analyze Your First Contract</span>
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
                {/* Free badge on button */}
                <div className="absolute -top-2.5 -right-2.5 bg-[#0D1A14] border border-white/30 text-white text-[10px] font-['Manrope'] font-bold px-2 py-0.5 rounded-full">
                  No Card Needed
                </div>
              </div>

              <button
                className="text-base font-medium text-slate-300 font-['Manrope']
                            hover:text-[#9DBFBF] transition-colors duration-200
                            underline-offset-4 hover:underline py-4 flex items-center gap-1.5 hover:gap-2.5 transition-all"
                onClick={() => {
                  const el = document.getElementById('how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See How It Works
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Social proof */}
            <motion.div
              initial={prefersReduced ? undefined : { opacity: 0 }}
              animate={prefersReduced ? undefined : { opacity: 1 }}
              transition={prefersReduced ? { duration: 0 } : { delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2" aria-hidden="true">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#9DBFBF] to-[#607D3B] border-2 border-[#0D1A14]" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#607D3B] to-[#264E36] border-2 border-[#0D1A14]" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#264E36] to-[#9DBFBF] border-2 border-[#0D1A14]" />
                <div className="w-7 h-7 rounded-full bg-[#112A1E] border-2 border-[#0D1A14] flex items-center justify-center">
                  <span className="text-[9px] font-['Manrope'] font-bold text-[#9DBFBF]">+</span>
                </div>
              </div>
              <span className="text-sm text-slate-400 font-['Manrope']">
                <span className="text-[#9DBFBF] font-semibold">Thousands</span> of contracts analyzed &middot; <span className="text-[#9DBFBF] font-semibold">Tens of thousands</span> of issues caught
              </span>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={prefersReduced ? undefined : { opacity: 0 }}
              animate={prefersReduced ? undefined : { opacity: 1 }}
              transition={prefersReduced ? { duration: 0 } : { delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-slate-500 font-['Manrope']"
            >
              <span className="flex items-center gap-2">
                <span className="text-[#9DBFBF]" aria-hidden="true">✓</span>
                First 2 documents free — no card required
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#9DBFBF]" aria-hidden="true">✓</span>
                Your documents stay private
              </span>
            </motion.div>

          </motion.div>

          {/* Right column: Product Mockup */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 32 }}
            animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative mt-12 lg:mt-0"
          >
            {/* Browser window frame */}
            <div className="bg-[#112A1E] rounded-2xl border border-white/[0.08] shadow-soft-lg overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/[0.05] rounded-md px-3 py-1 text-xs text-slate-500 font-['Manrope'] text-center max-w-[200px] mx-auto">
                    audit.contre.ai
                  </div>
                </div>
              </div>

              {/* Mock product UI */}
              <div className="p-5 md:p-6 bg-gradient-to-b from-[#112A1E] to-[#0D1A14]">
                {/* Analysis header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-xs font-['Manrope'] text-[#9DBFBF] font-semibold uppercase tracking-wider mb-1">Contract Analysis</div>
                    <div className="text-sm font-['Manrope'] text-slate-500">Purchase Agreement — 123 Main St</div>
                  </div>
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, scale: 0.8 }}
                    animate={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: 1.2, duration: 0.4, type: "spring" }}
                    className="bg-[#9DBFBF]/10 text-[#9DBFBF] text-xs font-['Manrope'] font-semibold px-3 py-1 rounded-full"
                  >
                    Complete
                  </motion.div>
                </div>

                {/* Summary cards — animated counters */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
                    animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: 0.8, duration: 0.4 }}
                    className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-3 text-center"
                  >
                    <div className="font-['Bebas_Neue'] text-2xl text-[#9DBFBF]">
                      <AnimatedCounter target={12} delay={0.9} prefersReduced={prefersReduced} />
                    </div>
                    <div className="text-xs font-['Manrope'] text-slate-500 mt-1">Deadlines</div>
                  </motion.div>
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
                    animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: 0.95, duration: 0.4 }}
                    className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-3 text-center"
                  >
                    <div className="font-['Bebas_Neue'] text-2xl text-amber-400">
                      <AnimatedCounter target={3} delay={1.0} prefersReduced={prefersReduced} />
                    </div>
                    <div className="text-xs font-['Manrope'] text-slate-500 mt-1">Red Flags</div>
                  </motion.div>
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
                    animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: 1.1, duration: 0.4 }}
                    className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-3 text-center"
                  >
                    <div className="font-['Bebas_Neue'] text-2xl text-[#607D3B]">
                      <AnimatedCounter target={47} delay={1.1} prefersReduced={prefersReduced} />
                    </div>
                    <div className="text-xs font-['Manrope'] text-slate-500 mt-1">Pages Analyzed</div>
                  </motion.div>
                </div>

                {/* Flagged items — staggered reveal */}
                <div className="space-y-2.5">
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, x: -12 }}
                    animate={prefersReduced ? undefined : { opacity: 1, x: 0 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: 1.3, duration: 0.4 }}
                    className="flex items-start gap-3 bg-amber-400/[0.06] border border-amber-400/[0.12] rounded-xl p-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <div>
                      <div className="text-sm font-['Manrope'] font-semibold text-slate-200">Inspection deadline conflicts with financing contingency</div>
                      <div className="text-xs font-['Manrope'] text-slate-500 mt-0.5">Section 4.2 vs Section 7.1</div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, x: -12 }}
                    animate={prefersReduced ? undefined : { opacity: 1, x: 0 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: 1.5, duration: 0.4 }}
                    className="flex items-start gap-3 bg-[#9DBFBF]/[0.06] border border-[#9DBFBF]/[0.12] rounded-xl p-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#9DBFBF] flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <span className="text-[#264E36] text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <div className="text-sm font-['Manrope'] font-semibold text-slate-200">Seller credit of $8,500 confirmed</div>
                      <div className="text-xs font-['Manrope'] text-slate-500 mt-0.5">Section 3.4 — Closing cost allocation</div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, x: -12 }}
                    animate={prefersReduced ? undefined : { opacity: 1, x: 0 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: 1.7, duration: 0.4 }}
                    className="flex items-start gap-3 bg-amber-400/[0.06] border border-amber-400/[0.12] rounded-xl p-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <div>
                      <div className="text-sm font-['Manrope'] font-semibold text-slate-200">Missing seller disclosure signature — page 23</div>
                      <div className="text-xs font-['Manrope'] text-slate-500 mt-0.5">Required by state law before closing</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Decorative shadow glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#264E36]/15 via-transparent to-[#9DBFBF]/15 rounded-3xl -z-10 blur-2xl" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
