"use client"

import { motion } from "framer-motion"

export function FridayNightSectionAgents() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-['Bebas_Neue'] text-[#264E36] mb-10 leading-tight">
            We Know That Friday Night Call.
          </h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-700 font-['Manrope'] leading-relaxed mb-8 italic"
          >
            Client in panic. Deal on the line. "What did I miss?"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-600 font-['Manrope'] leading-relaxed mb-6"
          >
            Real estate runs on relationships — you shouldn't be consumed by paperwork anxiety. That's why we built Contre.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 font-['Manrope'] leading-relaxed"
          >
            We analyze every page, flag every deadline, surface every conflict. So you can focus on what you actually got into this business for.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
