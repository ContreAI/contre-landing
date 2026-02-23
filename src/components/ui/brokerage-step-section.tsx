"use client"

import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"
import { AmbientGlow } from "@/components/ui/ambient-glow"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface BrokerageStepSectionProps {
  stepNumber: string
  sectionId: string
  headline: string
  howDescription: string
  howBullets?: string[]
  whyDescription: string
  icon: LucideIcon
  layout: "left" | "right"
  mockContent: React.ReactNode
  bgVariant: number
}

const bgVariants = [
  "bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100",
  "bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200",
  "bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100",
  "bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200",
  "bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100",
]

const glowPositions = [
  { pos1: "top-[-200px] right-[-150px]", pos2: "bottom-[-100px] left-[-100px]" },
  { pos1: "top-[-150px] left-[-200px]", pos2: "bottom-[-150px] right-[-100px]" },
  { pos1: "top-[-100px] left-[-150px]", pos2: "bottom-[-200px] right-[-150px]" },
  { pos1: "bottom-[-150px] right-[-200px]", pos2: "top-[-100px] left-[-100px]" },
  { pos1: "top-[-200px] left-1/2 -translate-x-1/2", pos2: "bottom-[-150px] left-[-150px]" },
]

export function BrokerageStepSection({
  stepNumber,
  sectionId,
  headline,
  howDescription,
  howBullets,
  whyDescription,
  icon: Icon,
  layout,
  mockContent,
  bgVariant,
}: BrokerageStepSectionProps) {
  const prefersReduced = useReducedMotion()
  const bg = bgVariants[bgVariant % bgVariants.length]
  const glows = glowPositions[bgVariant % glowPositions.length]

  return (
    <section id={sectionId} className={`relative py-24 md:py-32 ${bg} overflow-hidden`}>
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#264E36]/15 to-transparent" />

      {/* Ambient glows */}
      <AmbientGlow color="#264E36" position={glows.pos1} opacity="opacity-[0.08]" size="w-[600px] h-[600px]" />
      <AmbientGlow color="#607D3B" position={glows.pos2} opacity="opacity-[0.06]" size="w-[400px] h-[400px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Step indicator badge */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, scale: 0.8 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.5, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-3 bg-white/[0.50] backdrop-blur-md border border-white/[0.60] rounded-full px-5 py-2 shadow-[0_4px_16px_rgba(38,78,54,0.06)]">
            <div className="w-8 h-8 rounded-full bg-[#264E36] flex items-center justify-center">
              <span className="font-['Bebas_Neue'] text-lg text-white">{stepNumber}</span>
            </div>
            <span className="text-sm font-['Manrope'] font-semibold text-[#264E36] uppercase tracking-wider">
              Step {stepNumber}
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold font-['Bebas_Neue'] text-[#264E36] mb-16 tracking-wide text-center max-w-4xl mx-auto"
        >
          {headline}
        </motion.h2>

        {/* Two-column content */}
        <div className={`lg:grid lg:gap-16 items-start ${layout === "right" ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]"}`}>
          {/* Content side */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, x: layout === "left" ? -20 : 20 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
            className={layout === "right" ? "lg:order-2" : "lg:order-1"}
          >
            {/* HOW block */}
            <div className="rounded-2xl p-6 md:p-8 mb-6 bg-white/[0.50] backdrop-blur-md border border-white/[0.60] shadow-[0_8px_32px_rgba(38,78,54,0.08),inset_0_1px_0_0_rgba(255,255,255,0.60)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#264E36]/[0.10] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#264E36]" />
                </div>
                <h3 className="text-xl font-['Bebas_Neue'] text-[#264E36] tracking-wider uppercase">How</h3>
              </div>
              <p className="text-base text-slate-700 font-['Manrope'] leading-relaxed">
                {howDescription}
              </p>
              {howBullets && howBullets.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {howBullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 font-['Manrope']">
                      <span className="text-[#264E36] mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* WHY block */}
            <motion.div
              initial={prefersReduced ? undefined : { opacity: 0, x: layout === "left" ? -20 : 20 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
              className="rounded-2xl p-6 md:p-8 border-l-4 border-l-[#264E36] bg-white/[0.30]"
            >
              <h3 className="text-xl font-['Bebas_Neue'] text-[#0D1A14] tracking-wider uppercase mb-3">
                Why This Matters
              </h3>
              <p className="text-base text-slate-600 font-['Manrope'] leading-relaxed">
                {whyDescription}
              </p>
            </motion.div>
          </motion.div>

          {/* Visual / Mock side */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
            className={`mt-10 lg:mt-0 ${layout === "right" ? "lg:order-1" : "lg:order-2"}`}
          >
            {mockContent}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
