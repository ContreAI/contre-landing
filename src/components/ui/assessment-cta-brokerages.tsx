"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AssessmentCTABrokerages() {
  const benefits = [
    "Risk score benchmarked against top-performing brokerages",
    "Your top 3 vulnerability points ranked by impact",
    "60-day action plan to fix them",
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
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 font-['Bebas_Neue'] tracking-wide">
            Free: See Where Your Transactions Are Most Vulnerable
          </h2>

          {/* Value Statement */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-['Manrope'] leading-relaxed mb-10"
          >
            Our Transaction Risk Assessment grades your brokerage's current process and shows you exactly where deals are slipping through — whether you work with us or not.
          </motion.p>

          {/* What You Get Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-3 mb-10"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3 text-white/95 font-['Manrope'] text-base md:text-lg"
              >
                <span className="text-[#9DBFBF] mt-0.5 shrink-0">•</span>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-6"
          >
            <div className="inline-block group">
              <Button
                variant="ghost"
                size="lg"
                className="relative rounded-2xl px-10 py-6 text-lg font-semibold
                            bg-white hover:bg-slate-100
                            text-[#264E36] transition-all duration-300
                            group-hover:-translate-y-1 group-hover:shadow-2xl
                            border-0 shadow-lg font-['Manrope']"
                onClick={() => window.open('https://audit.contre.ai', '_blank')}
              >
                <motion.span
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>Get My Free Assessment</span>
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

          {/* Friction Reducer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm md:text-base text-white/70 font-['Manrope']"
          >
            3-minute assessment. Actionable insights you can use today.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
