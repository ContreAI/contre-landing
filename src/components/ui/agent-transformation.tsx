"use client"

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { AmbientGlow } from "@/components/ui/ambient-glow"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

function ScrollCounter({ target, suffix = "", prefersReduced = false }: { target: number; suffix?: string; prefersReduced?: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const count = useMotionValue(prefersReduced ? target : 0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (prefersReduced || !isInView) return
    const controls = animate(count, target, { duration: 1.5, ease: "easeOut" })
    return controls.stop
  }, [count, target, isInView, prefersReduced])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

const transformations = [
  {
    before: "Spend hours re-reading contracts hoping you caught everything",
    after: "Every page analyzed and summarized in under a minute",
    metric: 60,
    metricSuffix: "sec",
    metricLabel: "Time to full analysis",
  },
  {
    before: "Answer client questions at all hours of the day and night",
    after: "Clients get instant answers 24/7 from their personal chatbot",
    metric: 0,
    metricSuffix: "",
    metricLabel: "Midnight client texts",
  },
  {
    before: "Skim most pages and hope for the best on the rest",
    after: "Every page of every document reviewed — every deadline tracked",
    metric: 100,
    metricSuffix: "%",
    metricLabel: "Documents fully reviewed",
  },
]

export function AgentTransformation() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#264E36]/15 to-transparent" />

      {/* Ambient glows */}
      <AmbientGlow color="#264E36" position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" opacity="opacity-[0.08]" size="w-[900px] h-[600px]" />
      <AmbientGlow color="#607D3B" position="bottom-[-200px] right-[-150px]" opacity="opacity-[0.06]" size="w-[500px] h-[500px]" />

      {/* Decorative arc */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[140%] h-[400px] rounded-[50%] border border-[#264E36]/[0.06] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold font-['Bebas_Neue'] text-[#264E36] tracking-wide mb-6">
            What Changes When You Start Using Contre
          </h2>
          <p className="text-lg md:text-xl text-slate-700 font-['Manrope'] max-w-2xl mx-auto">
            From uncertain to confident. From reactive to proactive.
          </p>
        </motion.div>

        {/* Transformation cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((item, i) => (
            <motion.div
              key={i}
              initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl p-6 md:p-8 text-center bg-white/[0.50] backdrop-blur-md border border-white/[0.60] shadow-[0_8px_32px_rgba(38,78,54,0.08),inset_0_1px_0_0_rgba(255,255,255,0.60)]"
            >
              {/* Large metric */}
              <div className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#264E36] mb-2">
                <ScrollCounter target={item.metric} suffix={item.metricSuffix} prefersReduced={prefersReduced} />
              </div>
              <div className="text-xs font-['Manrope'] font-semibold uppercase tracking-wider text-[#264E36]/60 mb-6">
                {item.metricLabel}
              </div>

              {/* Before */}
              <div className="text-sm text-slate-400 font-['Manrope'] line-through decoration-slate-300 mb-3">
                {item.before}
              </div>

              {/* After */}
              <div className="text-sm text-slate-700 font-['Manrope'] font-medium">
                {item.after}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge statement */}
        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0 }}
          whileInView={prefersReduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-slate-600 font-['Manrope'] text-center mt-16"
        >
          This is what the top <span className="text-[#264E36] font-semibold">10%</span> of agents already look like.
        </motion.p>
      </div>
    </section>
  )
}
