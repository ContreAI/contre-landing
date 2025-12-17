"use client";

import { motion } from "framer-motion";

export function FridayNightSection() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-bebas text-5xl md:text-7xl lg:text-8xl text-center tracking-wide text-slate-900 dark:text-white"
          >
            We Know The Friday Night Call.
          </motion.h2>

          {/* First Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 md:mt-14 text-xl md:text-2xl text-center text-slate-600 dark:text-slate-300 font-manrope leading-relaxed"
          >
            Client in panic. Something's wrong with the deal.
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            You're scrolling through 50 pages trying to find what you missed.
          </motion.p>

          {/* Second Paragraph - Emphasized */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 md:mt-12 text-xl md:text-2xl text-center text-slate-700 dark:text-slate-200 font-manrope leading-relaxed font-medium"
          >
            Real estate runs on relationships — you shouldn't be
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            consumed by paperwork anxiety.
          </motion.p>

          {/* Contre Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 md:mt-16 relative"
          >
            {/* Decorative line */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-16 h-1 bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] rounded-full" />

            <p className="text-lg md:text-xl text-center text-slate-600 dark:text-slate-300 font-manrope leading-relaxed max-w-3xl mx-auto">
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
