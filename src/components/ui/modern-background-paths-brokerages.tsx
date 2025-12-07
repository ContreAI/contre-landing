"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useMemo } from "react"

// Geometric Grid Paths
function GeometricPaths() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const paths = useMemo(() => {
    if (!mounted) return []

    const gridSize = 40
    const result = []

    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 12; y++) {
        if (Math.random() > 0.7) {
          result.push({
            id: `grid-${x}-${y}`,
            d: `M${x * gridSize},${y * gridSize} L${(x + 1) * gridSize},${y * gridSize} L${(x + 1) * gridSize},${(y + 1) * gridSize} L${x * gridSize},${(y + 1) * gridSize} Z`,
            delay: Math.random() * 5,
          })
        }
      }
    }
    return result
  }, [mounted])

  if (!mounted) {
    return null
  }

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 480">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

export default function EnhancedBackgroundPathsBrokerages() {
  const [currentPattern] = useState(2) // Set to 2 for geometric pattern
  const title = "Even the Best Agents Miss Things. We Catch Them Before They Cost You."
  const words = title.split(" ")

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 text-slate-600 dark:text-slate-400">
        <motion.div
          key={currentPattern}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <GeometricPaths />
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/60 dark:from-slate-900/60 dark:via-transparent dark:to-slate-900/60" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-4 tracking-normal leading-none font-['Bebas_Neue']">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-4 sm:mr-6 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        duration: 0.8
                      }}
                      className="inline-block text-transparent bg-clip-text
                                          bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500
                                          dark:from-white dark:via-slate-200 dark:to-slate-400
                                          hover:from-[#264E36] hover:via-[#607D3B] hover:to-[#9DBFBF] dark:hover:from-[#264E36] dark:hover:via-[#607D3B] dark:hover:to-[#9DBFBF]
                                          transition-all duration-700 cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
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
              transition={{ delay: 1.2, duration: 1 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light tracking-wide max-w-3xl mx-auto font-['Manrope']"
            >
              AI trained on <span className="font-semibold text-[#264E36] dark:text-[#9DBFBF]">YOUR</span> forms, <span className="font-semibold text-[#264E36] dark:text-[#9DBFBF]">YOUR</span> deadlines, <span className="font-semibold text-[#264E36] dark:text-[#9DBFBF]">YOUR</span> standards — so you're back to leading, not babysitting.
            </motion.p>

            {/* Value Stack - 3 Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-8 flex flex-col items-center gap-3 text-base md:text-lg text-slate-700 dark:text-slate-300 font-['Manrope']"
            >
              <span className="flex items-center gap-3">
                <span className="text-[#264E36] dark:text-[#9DBFBF] text-xl">•</span>
                Every document reviewed against your brokerage's standards
              </span>
              <span className="flex items-center gap-3">
                <span className="text-[#264E36] dark:text-[#9DBFBF] text-xl">•</span>
                Every deadline extracted and tracked automatically
              </span>
              <span className="flex items-center gap-3">
                <span className="text-[#264E36] dark:text-[#9DBFBF] text-xl">•</span>
                Every conflict flagged before it becomes a crisis
              </span>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {/* Primary CTA - Brighter */}
            <div className="inline-block group">
              <Button
                variant="ghost"
                size="lg"
                className="relative rounded-2xl px-10 py-6 text-lg font-semibold
                            bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#4a6b2f]
                            hover:from-[#1a3624] hover:via-[#4a5f2d] hover:to-[#3d5a28]
                            text-white transition-all duration-300
                            group-hover:-translate-y-1 group-hover:shadow-2xl
                            border-0 shadow-lg font-['Manrope']"
                onClick={() => window.open('https://audit.contre.ai', '_blank')}
              >
                <motion.span
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>Protect Your Deals</span>
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

            {/* Secondary CTA - Softer */}
            <div className="inline-block group">
              <div className="relative p-[2px] bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600 rounded-2xl group-hover:from-[#264E36] group-hover:via-[#607D3B] group-hover:to-[#9DBFBF] transition-all duration-300">
                <Button
                  variant="ghost"
                  size="lg"
                  className="relative rounded-[14px] px-10 py-6 text-lg font-semibold
                              bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800
                              text-slate-700 dark:text-slate-300 transition-all duration-300
                              group-hover:-translate-y-1 group-hover:shadow-xl
                              border-0 backdrop-blur-sm font-['Manrope']"
                  onClick={() => window.open('https://audit.contre.ai', '_blank')}
                >
                  <motion.span
                    className="flex items-center gap-3"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>Train Your Purchase Agreement Free</span>
                  </motion.span>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-slate-600 dark:text-slate-400 font-['Manrope']"
          >
            <span className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">✓</span>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">✓</span>
              2-minute setup
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">✓</span>
              Integrates with SkySlope & LoneWolf
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/20 rounded-full blur-sm"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-3/4 right-1/3 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  )
}
