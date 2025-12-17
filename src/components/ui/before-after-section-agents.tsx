"use client"

import { motion } from "framer-motion"

export function BeforeAfterSectionAgents() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex flex-col items-center text-center">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-semibold font-['Bebas_Neue'] text-slate-400 mb-4">
              Before Contre
            </h3>
            <p className="text-lg md:text-xl text-slate-500 font-['Manrope']">
              Reviewing contracts twice and still not sure you caught everything
            </p>
          </motion.div>

          {/* Animated Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="my-6"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#264E36] via-[#607D3B] to-[#9DBFBF] flex items-center justify-center shadow-lg">
                <motion.svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    d="M12 5v14M19 12l-7 7-7-7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.svg>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#264E36] to-[#9DBFBF] blur-xl opacity-30" />
            </motion.div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <h3 className="text-2xl md:text-3xl font-semibold font-['Bebas_Neue'] text-[#264E36] mb-4">
              With Contre
            </h3>
            <p className="text-lg md:text-xl text-slate-700 font-['Manrope'] font-medium">
              Knowing everything in the deal — and speaking about it with confidence
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
