"use client"

import { motion } from "framer-motion"

interface StatsBannerSimpleProps {
  stat: string
  source: string
  variant?: "green" | "seaglass"
}

export function StatsBannerSimple({ stat, source, variant = "green" }: StatsBannerSimpleProps) {
  const bgClass = variant === "seaglass"
    ? "bg-gradient-to-r from-[#9DBFBF] via-[#7fa3a3] to-[#9DBFBF]"
    : "bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#264E36]"

  return (
    <section className={`relative w-full py-16 md:py-20 ${bgClass} overflow-hidden`}>
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-bebas text-white tracking-wide leading-tight mb-4">
            {stat}
          </p>
          <p className="text-sm md:text-base text-white/70 font-manrope">
            {source}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
