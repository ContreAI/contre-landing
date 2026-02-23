"use client"

import { motion } from "framer-motion"
import { Upload, FileSearch, MessageCircle } from "lucide-react"
import { AmbientGlow } from "@/components/ui/ambient-glow"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function HowItWorks() {
  const prefersReduced = useReducedMotion();
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Any Document",
      description: "Drag and drop contracts, HOAs, title reports, disclosures — any transaction paperwork. Processed in seconds.",
    },
    {
      number: "02",
      icon: FileSearch,
      title: "Get Your One-Page Report",
      description: "Every deadline, red flag, and conflict extracted. 100 pages becomes 1 page of what matters.",
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Ask Anything",
      description: "Use the AI chatbot to dig deeper, clarify terms, or explore scenarios. Like having an expert on call 24/7.",
    },
  ]

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-gradient-to-b from-[#131313] via-[#161616] to-[#131313] overflow-hidden">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      {/* Subtle glows — teal hints only, no green flood */}
      <AmbientGlow color="#9DBFBF" position="top-[-200px] right-[-150px]" opacity="opacity-[0.05]" size="w-[500px] h-[500px]" />
      <AmbientGlow color="#607D3B" position="bottom-[-150px] left-[-150px]" opacity="opacity-[0.04]" size="w-[400px] h-[400px]" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-semibold font-bebas text-white mb-6 tracking-wide">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-manrope max-w-2xl mx-auto">
            Three steps. Every detail. Nothing missed.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl p-7 md:p-8 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] overflow-hidden hover:bg-white/[0.08] hover:border-white/[0.14] hover:shadow-[0_4px_24px_rgba(157,191,191,0.06)] hover:scale-[1.01] transition-all duration-300"
            >
              {/* Giant background number */}
              <div className="absolute -top-5 -right-3 font-bebas text-[130px] leading-none text-white/[0.03] group-hover:text-white/[0.06] select-none pointer-events-none transition-colors duration-500">
                {step.number}
              </div>

              {/* Content — left-aligned */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#9DBFBF]/[0.08] group-hover:bg-[#9DBFBF]/[0.14] rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-[#9DBFBF]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold font-bebas text-white mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 font-manrope leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
