"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { Button } from "@/components/ui/button"
import { UserCheck, ChevronDown } from "lucide-react"
import { useEffect } from "react"
import { AmbientGlow } from "@/components/ui/ambient-glow"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { APP_URL } from "@/lib/config"
import { trackCTAClick } from "@/lib/gtag"

function AnimatedCounter({ target, duration = 1.5, delay = 0, prefersReduced = false }: { target: number; duration?: number; delay?: number; prefersReduced?: boolean }) {
  const count = useMotionValue(prefersReduced ? target : 0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (prefersReduced) return
    const controls = animate(count, target, { duration, delay, ease: "easeOut" })
    return controls.stop
  }, [count, target, duration, delay, prefersReduced])

  return <motion.span>{rounded}</motion.span>
}

export function AgentHero() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 overflow-hidden py-0">
      {/* Ambient glow effects */}
      <AmbientGlow color="#264E36" position="top-[-300px] left-1/2 -translate-x-1/2" opacity="opacity-[0.10]" size="w-[800px] h-[800px]" />
      <AmbientGlow color="#607D3B" position="top-[-100px] right-[-200px]" opacity="opacity-[0.07]" size="w-[500px] h-[500px]" />
      <AmbientGlow color="#264E36" position="bottom-[-100px] left-[-150px]" opacity="opacity-[0.08]" size="w-[400px] h-[400px]" />

      {/* Subtle curved decorative arc */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[120%] h-[500px] rounded-[50%] border border-[#264E36]/[0.06] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-10 lg:py-12">
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
              className="inline-flex items-center gap-2 bg-white/[0.50] border border-white/[0.60] rounded-full px-4 py-1.5 mb-4 shadow-[0_2px_8px_rgba(38,78,54,0.06)]"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#264E36]" aria-hidden="true" />
              <span className="text-xs font-['Manrope'] font-semibold text-[#264E36]">Built for Individual Agents</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-['Bebas_Neue'] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#264E36] tracking-wide leading-[1.05] mb-4">
              Never Miss a Deadline, Red Flag,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1A14] via-[#264E36] to-[#0D1A14]">
                or Fine Print Again
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-slate-700 font-['Manrope'] leading-relaxed mb-5 max-w-lg">
              Upload your contract. Know exactly what needs attention. Answer client questions instantly with your personal AI chatbot. Never wonder what you missed.
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-4">
              <div className="inline-block group relative">
                <div className="absolute -inset-1.5 bg-[#264E36] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                <Button
                  variant="ghost"
                  size="lg"
                  className="relative rounded-2xl px-8 py-5 text-base font-semibold
                              bg-[#264E36] hover:bg-[#1a3624]
                              text-white transition-all duration-200
                              group-hover:-translate-y-1 group-hover:shadow-[0_8px_32px_rgba(38,78,54,0.3)]
                              border-0 shadow-lg font-['Manrope']"
                  onClick={() => { trackCTAClick('Upload Your First Contract'); window.open(`${APP_URL}/authentication/signup`, '_blank') }}
                >
                  <motion.span
                    className="flex items-center gap-3"
                    whileHover={prefersReduced ? undefined : { x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>Upload Your First Contract</span>
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
                <div className="absolute -top-2.5 -right-2.5 bg-white border border-[#264E36]/20 text-[#264E36] text-[10px] font-['Manrope'] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  Free to Start
                </div>
              </div>

              <button
                className="text-base font-medium text-slate-600 font-['Manrope']
                            hover:text-[#264E36] transition-colors duration-200
                            underline-offset-4 hover:underline py-4 flex items-center gap-1.5 hover:gap-2.5 transition-all"
                onClick={() => {
                  const el = document.getElementById('step-01');
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
              className="flex items-center gap-3 mb-3"
            >
              <div className="flex -space-x-2" aria-hidden="true">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#264E36] to-[#607D3B] border-2 border-white/60" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#607D3B] to-[#264E36] border-2 border-white/60" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0D1A14] to-[#264E36] border-2 border-white/60" />
                <div className="w-7 h-7 rounded-full bg-[#264E36] border-2 border-white/60 flex items-center justify-center">
                  <span className="text-[9px] font-['Manrope'] font-bold text-white">+</span>
                </div>
              </div>
              <span className="text-sm text-slate-600 font-['Manrope']">
                <span className="text-[#264E36] font-semibold">Thousands</span> of contracts analyzed &middot; <span className="text-[#264E36] font-semibold">Tens of thousands</span> of issues caught
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
                <span className="text-[#264E36]" aria-hidden="true">✓</span>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#264E36]" aria-hidden="true">✓</span>
                Results in 60 seconds
              </span>
            </motion.div>
          </motion.div>

          {/* Right column: Mock Dashboard */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 32 }}
            animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="bg-[#0D1A14] rounded-2xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/[0.05] rounded-md px-3 py-1 text-xs text-slate-500 font-['Manrope'] text-center max-w-[200px] mx-auto">
                    app.contre.ai/transactions
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-4 md:p-5 bg-gradient-to-b from-[#112A1E] to-[#0D1A14]">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs font-['Manrope'] text-[#9DBFBF] font-semibold uppercase tracking-wider mb-1">Your Transactions</div>
                    <div className="text-sm font-['Manrope'] text-slate-500">742 Evergreen Terrace</div>
                  </div>
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, scale: 0.8 }}
                    animate={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: 1.2, duration: 0.4, type: "spring" }}
                    className="bg-[#9DBFBF]/10 text-[#9DBFBF] text-xs font-['Manrope'] font-semibold px-3 py-1 rounded-full"
                  >
                    Live
                  </motion.div>
                </div>

                {/* Summary stat cards */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
                    animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: 0.8, duration: 0.4 }}
                    className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-3 text-center"
                  >
                    <div className="font-['Bebas_Neue'] text-2xl text-[#9DBFBF]">
                      <AnimatedCounter target={5} delay={0.9} prefersReduced={prefersReduced} />
                    </div>
                    <div className="text-xs font-['Manrope'] text-slate-500 mt-1">Docs Uploaded</div>
                  </motion.div>
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
                    animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: 0.95, duration: 0.4 }}
                    className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-3 text-center"
                  >
                    <div className="font-['Bebas_Neue'] text-2xl text-amber-400">
                      <AnimatedCounter target={2} delay={1.0} prefersReduced={prefersReduced} />
                    </div>
                    <div className="text-xs font-['Manrope'] text-slate-500 mt-1">Flagged Issues</div>
                  </motion.div>
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
                    animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: 1.1, duration: 0.4 }}
                    className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-3 text-center"
                  >
                    <div className="font-['Bebas_Neue'] text-2xl text-[#9DBFBF]">
                      <AnimatedCounter target={12} delay={1.1} prefersReduced={prefersReduced} />
                    </div>
                    <div className="text-xs font-['Manrope'] text-slate-500 mt-1">Days to Close</div>
                  </motion.div>
                </div>

                {/* Recent alerts */}
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
                      <div className="text-sm font-['Manrope'] font-semibold text-slate-200">Inspection deadline in 3 days — response not yet received</div>
                      <div className="text-xs font-['Manrope'] text-slate-500 mt-0.5">742 Evergreen Terrace · Action needed</div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, x: -12 }}
                    animate={prefersReduced ? undefined : { opacity: 1, x: 0 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: 1.5, duration: 0.4 }}
                    className="flex items-start gap-3 bg-[#9DBFBF]/[0.06] border border-[#9DBFBF]/[0.12] rounded-xl p-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#9DBFBF] flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <span className="text-[#0D1A14] text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <div className="text-sm font-['Manrope'] font-semibold text-slate-200">Purchase agreement reviewed — all contingencies tracked</div>
                      <div className="text-xs font-['Manrope'] text-slate-500 mt-0.5">5 documents analyzed · 47 pages reviewed</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Decorative shadow glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#264E36]/10 via-transparent to-[#264E36]/10 rounded-3xl -z-10 blur-2xl" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
