"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { AmbientGlow } from "@/components/ui/ambient-glow"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function VideoDemo() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0D1A14] via-[#112A1E] to-[#0D1A14] overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <AmbientGlow color="#264E36" position="top-[-100px] left-1/2 -translate-x-1/2" opacity="opacity-[0.12]" size="w-[800px] h-[800px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-bebas text-white mb-4 tracking-wide">
            See It In Action
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-manrope max-w-2xl mx-auto">
            Watch how Contre turns a 50-page contract into a one-page report in under 60 seconds.
          </p>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-md shadow-soft-lg"
        >
          {/* TODO: Replace this placeholder with your actual video embed */}
          {/* Options: */}
          {/*   <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ... /> */}
          {/*   <video src="/demo.mp4" controls poster="/demo-poster.jpg" /> */}

          {/* Placeholder content */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#112A1E] to-[#0D1A14] flex flex-col items-center justify-center gap-6">
            {/* Play button */}
            <div className="w-20 h-20 rounded-full bg-white/[0.10] border border-white/[0.15] flex items-center justify-center">
              <Play className="w-8 h-8 text-white ml-1" fill="white" fillOpacity={0.9} />
            </div>
            <p className="text-sm text-slate-500 font-manrope">
              Product demo coming soon
            </p>
          </div>

          {/* Decorative glow behind video */}
          <div className="absolute -inset-4 bg-gradient-to-br from-[#264E36]/10 via-transparent to-[#9DBFBF]/10 rounded-3xl -z-10 blur-2xl" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}
