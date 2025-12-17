"use client"

import { motion } from "framer-motion"

export function StakesSectionBrokerages() {
  const consequences = [
    "Lost deals. Lost commissions.",
    "E&O claims that cost $100K+ to defend — even when you win.",
    "A buyer who spots what your agent didn't.",
    "Competitors using technology you passed on.",
  ]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Green Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#264E36] via-[#1a3624] to-[#0f1f14]" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 font-['Bebas_Neue'] tracking-wide text-center">
            When Something Slips Through, It's Still On You
          </h2>

          {/* Stakes Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-['Manrope'] leading-relaxed text-center mb-12"
          >
            You can't review every document yourself. But when an agent misses a deadline buried in addendum #3, or overlooks the HOA restriction on page 47, or sends conflicting terms to the closing table — <span className="font-semibold text-[#9DBFBF]">you're the one taking the call.</span>
          </motion.p>

          {/* Bullet Consequences */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            {consequences.map((consequence, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 text-white/95 font-['Manrope'] text-base md:text-lg"
              >
                <span className="text-[#9DBFBF] mt-1 text-xl shrink-0">•</span>
                <span>{consequence}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  )
}
