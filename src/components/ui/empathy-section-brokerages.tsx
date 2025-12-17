"use client"

import { motion } from "framer-motion"

export function EmpathySectionBrokerages() {
  const competencyProof = [
    "Integrates directly with SkySlope & LoneWolf",
    "Built specifically for real estate transactions",
    "Dual-AI verification on critical dates and dollar amounts",
  ]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-10 font-['Bebas_Neue'] tracking-wide text-center">
            We Know That Friday Night Call
          </h2>

          {/* Empathy Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-700 font-['Manrope'] leading-relaxed text-center mb-8"
          >
            Agent in panic. Deal on the line. Something slipped through — and now you're the one fixing it. We built Contre because we've lived that moment. We know what's at stake when paperwork falls through the cracks.
          </motion.p>

          {/* Competency Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-700 font-['Manrope'] leading-relaxed text-center mb-12"
          >
            Contre is trained on <span className="font-semibold text-[#264E36]">YOUR</span> forms, <span className="font-semibold text-[#264E36]">YOUR</span> deadlines, <span className="font-semibold text-[#264E36]">YOUR</span> standards — not generic real estate rules. We learn what "good" looks like at your brokerage, then apply that standard to every transaction automatically. Because even good agents miss things, and it shouldn't fall on you to catch everything.
          </motion.p>

          {/* Competency Proof - subtle divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          </motion.div>

          {/* Competency Proof Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm md:text-base text-slate-600 font-['Manrope']"
          >
            {competencyProof.map((proof, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="text-[#607D3B]">•</span>
                <span>{proof}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
