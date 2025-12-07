"use client"

import { motion } from "framer-motion"

export function AgentNeverMissesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#1a3624] via-[#264E36] to-[#607D3B]">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Decorative gradient blurs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9DBFBF] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#607D3B] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-['Bebas_Neue'] text-white mb-10 leading-tight">
            The Agent Who Never Misses
          </h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#9DBFBF] font-['Manrope'] leading-relaxed mb-8 font-medium"
          >
            Confident and trusted. Happier clients. More referrals.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 font-['Manrope'] leading-relaxed mb-6"
          >
            You know every detail of every deal. You speak with confidence because you've actually got the answers. Your clients get more transparency than they've ever had from any other agent.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 font-['Manrope'] leading-relaxed italic"
          >
            That's not just good service — that's a reputation that compounds.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
