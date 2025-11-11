"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTASectionBrokerages() {
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
            Free: Your 60-Day Roadmap to Bulletproof Transaction Management
          </h2>

          {/* Body Copy */}
          <p className="text-lg md:text-xl text-slate-700 font-['Manrope'] max-w-3xl mx-auto mb-6">
            Our Transactional Risk Assessment grades your brokerage's current process and builds a customized action plan to protect against the costly mistakes we catch every day.
          </p>

          {/* Your personalized report includes */}
          <div className="text-left max-w-2xl mx-auto mb-8">
            <p className="text-base md:text-lg font-semibold text-slate-800 font-['Manrope'] mb-4">
              Your personalized report includes:
            </p>
            <ul className="space-y-3 text-base md:text-lg text-slate-700 font-['Manrope']">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Risk score benchmarked against top-performing brokerages</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Priority fixes ranked by impact and ease of implementation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>60-day step-by-step roadmap (what to do first, second, third)</span>
              </li>
            </ul>
          </div>

          <p className="text-base md:text-lg text-slate-700 font-['Manrope'] max-w-2xl mx-auto mb-10 italic">
            See exactly where your process is vulnerable—and how to fix it systematically.
          </p>

          {/* CTA Button */}
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
                onClick={() => window.open('https://audit.contre.ai', '_blank')}
              >
                <motion.span
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative">
                    Get My Free Assessment
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

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 text-sm text-slate-600 font-['Manrope']"
          >
            3-minute assessment. Actionable intel you can implement today—whether you work with us or not.
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
