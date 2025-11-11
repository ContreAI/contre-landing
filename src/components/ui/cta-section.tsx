"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#9DBFBF]/20 via-[#9DBFBF]/30 to-[#9DBFBF]/20">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#264E36_1px,transparent_1px),linear-gradient(to_bottom,#264E36_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-[#264E36] mb-6">
            Ready to Protect Your Next Deal?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-700 font-['Manrope'] max-w-2xl mx-auto mb-10">
            Join hundreds of agents and brokers who trust Contre to catch the costly mistakes before they happen.
          </p>

          {/* CTA Button - Same as hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-block group"
          >
            <div className="relative p-[2px] bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] rounded-2xl group-hover:from-[#1a3624] group-hover:via-[#4a5f2d] group-hover:to-[#7da3a3] transition-all duration-300">
              <Button
                variant="ghost"
                size="lg"
                className="relative rounded-[14px] px-12 py-6 text-lg font-semibold
                            bg-white hover:bg-slate-50
                            text-slate-900 transition-all duration-300
                            group-hover:-translate-y-1 group-hover:shadow-2xl
                            border-0 backdrop-blur-sm font-['Manrope']"
              >
                <motion.span
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative">
                    Run a Free Risk Assessment
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#264E36] to-[#607D3B] group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-xl"
                  >
                    →
                  </motion.span>
                </motion.span>
              </Button>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-slate-600 font-['Manrope']"
          >
            <span className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Takes 2 minutes
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Trusted by agents + brokers across the U.S.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
