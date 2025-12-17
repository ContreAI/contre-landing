"use client"

import { motion } from "framer-motion"

export function PricingHero() {
  const title = "Your Time Back. Your Deals Protected."
  const words = title.split(" ")

  return (
    <div className="relative min-h-[50vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#264E36_1px,transparent_1px),linear-gradient(to_bottom,#264E36_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 tracking-normal leading-none font-['Bebas_Neue']">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 120,
                      damping: 20,
                    }}
                    className="inline-block text-transparent bg-clip-text
                              bg-gradient-to-br from-[#264E36] via-[#607D3B] to-[#4a6b2f]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 font-['Manrope'] font-light tracking-wide max-w-2xl mx-auto"
          >
            Real estate runs on relationships — not paperwork anxiety. Pick your plan.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex flex-col items-center text-slate-400"
            >
              <span className="text-sm font-['Manrope'] mb-2">Scroll to explore</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
