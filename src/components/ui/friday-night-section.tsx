"use client";

import { motion } from "framer-motion";
import { AmbientGlow } from "@/components/ui/ambient-glow";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function FridayNightSection() {
  const prefersReduced = useReducedMotion();
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0D1A14] via-[#112A1E] to-[#162E22] py-20 md:py-32 overflow-hidden">
      {/* Decorative curved arc */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[140%] h-[600px] rounded-[50%] border border-white/[0.03] pointer-events-none" />
      <AmbientGlow color="#264E36" position="top-[-150px] left-[-100px]" opacity="opacity-[0.18]" size="w-[600px] h-[600px]" />
      <AmbientGlow color="#9DBFBF" position="bottom-[-100px] right-[-150px]" opacity="opacity-[0.14]" size="w-[500px] h-[500px]" />
      <AmbientGlow color="#607D3B" position="top-[40%] left-[50%] -translate-x-1/2" opacity="opacity-[0.08]" size="w-[700px] h-[300px]" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.h2
            initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
            className="font-bebas text-5xl md:text-7xl lg:text-8xl text-center tracking-wide text-white"
          >
            We Know The Friday Night Call.
          </motion.h2>

          {/* First Paragraph */}
          <motion.p
            initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
            className="mt-10 md:mt-14 text-xl md:text-2xl text-center text-slate-400 font-manrope leading-relaxed"
          >
            Client in panic. Something's wrong with the deal.
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            You're scrolling through 50 pages trying to find what you missed.
          </motion.p>

          {/* Second Paragraph - Emphasized */}
          <motion.p
            initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
            className="mt-10 md:mt-12 text-xl md:text-2xl text-center text-slate-300 font-manrope leading-relaxed font-medium"
          >
            Real estate runs on relationships — you shouldn't be
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            consumed by paperwork anxiety.
          </motion.p>

          {/* Contre Statement */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, scale: 0.95 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.8, delay: 0.6 }}
            className="mt-12 md:mt-16"
          >
            <p className="font-bebas text-4xl md:text-5xl lg:text-6xl text-center tracking-wide">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF]">
                That's why we built Contre.
              </span>
            </p>
          </motion.div>

          {/* Origin Story */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: 0.8 }}
            className="mt-12 md:mt-16 relative"
          >
            {/* Decorative line */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-16 h-1 bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] rounded-full" />

            <p className="text-lg md:text-xl text-center text-slate-400 font-manrope leading-relaxed max-w-3xl mx-auto">
              We're former agents and brokerage owners who lived this problem.
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              Now we train AI on your exact forms, your state's deadlines,
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              your brokerage's standards — so nothing slips through.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
