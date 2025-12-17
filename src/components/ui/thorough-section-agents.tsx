"use client"

import { motion } from "framer-motion"

export function ThoroughSectionAgents() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#1a3624] via-[#264E36] to-[#607D3B]">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Decorative gradient blurs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#9DBFBF] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#607D3B] rounded-full blur-3xl" />
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
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-['Bebas_Neue'] text-white mb-8 leading-tight">
            You're Thorough. But Thorough Isn't Always Enough.
          </h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-['Manrope'] leading-relaxed mb-8"
          >
            1 in 6 deals falls apart. When it's yours, it's not a statistic — it's a lost commission, an awkward conversation, and a client who won't be referring you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 font-['Manrope'] leading-relaxed mb-10"
          >
            The worst part? It's usually something buried on page 47 that everyone assumed someone else caught.
          </motion.p>

          {/* Closer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block"
          >
            <p className="text-base md:text-lg text-[#9DBFBF] font-['Manrope'] font-medium italic">
              Lost deals. Damaged reputation. The embarrassment of someone else catching what you didn't.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
