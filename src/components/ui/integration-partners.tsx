"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function IntegrationPartners() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative py-10 md:py-14 bg-[#0D1A14] overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          {/* Label */}
          <p className="text-xs font-['Manrope'] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Official API Integration Partners
          </p>

          {/* Logos + Badge row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
            {/* SkySlope Logo */}
            <motion.div
              initial={prefersReduced ? undefined : { opacity: 0, x: -12 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
              className="flex items-center"
            >
              <Image
                src="/skyslope-logo.png"
                alt="SkySlope - Official Integration Partner"
                width={160}
                height={40}
                className="h-8 md:h-10 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>

            {/* API Integration Badge */}
            <motion.div
              initial={prefersReduced ? undefined : { opacity: 0, scale: 0.9 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <Image
                src="/API Integration Badge.png"
                alt="Official API Integration Partner Badge"
                width={80}
                height={100}
                className="h-16 md:h-20 w-auto drop-shadow-lg"
              />
            </motion.div>

            {/* Lone Wolf Logo */}
            <motion.div
              initial={prefersReduced ? undefined : { opacity: 0, x: 12 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
              className="flex items-center"
            >
              <Image
                src="/LW logo.png"
                alt="Lone Wolf - Official Integration Partner"
                width={160}
                height={40}
                className="h-7 md:h-9 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          </div>

          {/* Supporting text */}
          <p className="text-sm text-slate-500 font-['Manrope'] text-center max-w-md">
            Connects directly with the two largest transaction management platforms in the US
          </p>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  )
}
