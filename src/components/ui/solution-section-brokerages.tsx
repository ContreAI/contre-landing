"use client"

import { motion } from "framer-motion"

export function SolutionSectionBrokerages() {
  const outcomes = [
    "More deals close without last-minute surprises",
    "Agents look sharper — even your newest ones",
    "Consistent quality across every transaction, every agent",
    "You lead your team instead of babysitting their contracts",
  ]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-slate-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #264E36 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-8 font-['Bebas_Neue'] tracking-wide text-center">
            Every Document Read. Every Deadline Tracked.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#264E36] to-[#607D3B]">
              Nothing Slips Through.
            </span>
          </h2>

          {/* Value Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-700 font-['Manrope'] leading-relaxed text-center mb-12"
          >
            Contre reviews every page of every transaction against your brokerage's standards — automatically. Your agents get clear reports. You get full visibility. And you're back to building your business instead of chasing down paperwork fires.
          </motion.p>

          {/* Outcome Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 text-slate-800 font-['Manrope'] text-base md:text-lg"
              >
                <span className="text-[#264E36] mt-0.5 text-xl shrink-0">•</span>
                <span>{outcome}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
