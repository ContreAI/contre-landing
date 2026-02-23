"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { AmbientGlow } from "@/components/ui/ambient-glow";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const documents = [
  {
    document: "100-Page HOA Packet",
    pages: 100,
    manualTime: "~3 hrs",
    result: "1-Page Summary",
    detail: "Every red flag, fee, and restriction — extracted and organized.",
  },
  {
    document: "50-Page Title Report",
    pages: 50,
    manualTime: "~2 hrs",
    result: "Red Flag Report",
    detail: "Liens, encumbrances, and title defects surfaced instantly.",
  },
  {
    document: "Purchase Agreement",
    pages: 23,
    manualTime: "~45 min",
    result: "Every Deadline, Tracked",
    detail: "Contingencies, inspection windows, and closing milestones.",
  },
];

function PageStack({ pages }: { pages: number }) {
  return (
    <div className="relative flex-shrink-0 w-14 h-[4.5rem]">
      {/* Back pages */}
      <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-white/[0.03] border border-white/[0.06]" />
      <div className="absolute top-1 left-1 w-full h-full rounded-lg bg-white/[0.04] border border-white/[0.07]" />
      {/* Front page with count */}
      <div className="absolute top-2 left-2 w-full h-full rounded-lg bg-white/[0.06] border border-white/[0.10] flex items-center justify-center">
        <span className="font-bebas text-xl text-slate-400">{pages}</span>
      </div>
    </div>
  );
}

function OutputPage() {
  return (
    <div className="relative flex-shrink-0 w-14 h-[4.5rem] rounded-lg bg-[#9DBFBF]/[0.08] border border-[#9DBFBF]/20 flex items-center justify-center">
      <span className="font-bebas text-xl text-[#9DBFBF]">1</span>
    </div>
  );
}

export function DocumentTable() {
  const prefersReduced = useReducedMotion();
  return (
    <section className="relative w-full bg-gradient-to-b from-[#161412] via-[#112A1E] to-[#0D1A14] py-20 md:py-28 overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#607D3B]/15 to-transparent" />
      <AmbientGlow color="#9DBFBF" position="top-[-100px] right-[-100px]" opacity="opacity-[0.12]" size="w-[500px] h-[500px]" />
      <AmbientGlow color="#264E36" position="bottom-[-150px] left-[-100px]" opacity="opacity-[0.10]" size="w-[400px] h-[400px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-bebas text-white mb-4 tracking-wide">
            Every Document. One Page. Everything That Matters.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-manrope max-w-2xl mx-auto">
            Contre reads everything so you don&apos;t have to — then gives you exactly what you need to protect the deal.
          </p>
        </motion.div>

        {/* Transformation cards */}
        <div className="max-w-4xl mx-auto space-y-5">
          {documents.map((item, index) => (
            <motion.div
              key={index}
              initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: index * 0.12 }}
              className="rounded-2xl p-5 md:p-7 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] flex flex-col md:flex-row items-center gap-5 md:gap-0"
            >
              {/* Input side */}
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <PageStack pages={item.pages} />
                <div>
                  <p className="font-manrope text-base md:text-lg text-slate-300 font-medium">
                    {item.document}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-1.5 text-xs font-manrope text-slate-500">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {item.manualTime} manual review
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 px-4 md:px-8">
                <ArrowRight className="w-5 h-5 text-slate-600" aria-hidden="true" />
              </div>

              {/* Output side */}
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <OutputPage />
                <div>
                  <p className="font-manrope text-base md:text-lg text-[#9DBFBF] font-semibold">
                    {item.result}
                  </p>
                  <p className="font-manrope text-sm text-slate-500 mt-0.5">
                    {item.detail}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-1.5 text-xs font-manrope font-semibold text-[#9DBFBF]">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    60 seconds
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
