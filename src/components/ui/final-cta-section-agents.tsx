"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function FinalCTASectionAgents() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#1a3624] via-[#264E36] to-[#607D3B]">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Decorative gradient blurs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#9DBFBF] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#607D3B] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-['Bebas_Neue'] text-white mb-6 leading-tight">
            Stop Wondering. Start Knowing.
          </h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-['Manrope'] mb-10"
          >
            Upload your first contract and see what you've been missing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <div className="relative p-[2px] bg-white rounded-2xl hover:bg-white/90 transition-all duration-300 group">
              <Button
                variant="ghost"
                size="lg"
                className="relative rounded-[14px] px-10 py-6 text-lg font-semibold
                          bg-gradient-to-r from-[#264E36] to-[#607D3B] hover:from-[#1a3624] hover:to-[#4a5f2d]
                          text-white transition-all duration-300
                          group-hover:-translate-y-0.5 group-hover:shadow-2xl
                          border-0 font-['Manrope']"
              >
                <motion.span
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Upload Your First Contract
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </Button>
            </div>

            {/* Secondary CTA */}
            <Button
              variant="ghost"
              size="lg"
              className="px-10 py-6 text-lg font-semibold
                        text-white/70 hover:text-white hover:bg-white/10
                        transition-all duration-300
                        border border-white/20 hover:border-white/40
                        rounded-2xl font-['Manrope']"
            >
              See a Sample Report
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
