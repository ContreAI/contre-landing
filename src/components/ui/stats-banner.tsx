"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { AmbientGlow } from "@/components/ui/ambient-glow";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  IconHomeCancel,
  IconGavel,
  IconFileAlert,
  IconUserCancel,
} from "@tabler/icons-react";

function ScrollCounter({
  target,
  duration = 1.5,
  decimals,
}: {
  target: number;
  duration?: number;
  decimals?: number;
}) {
  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(prefersReduced ? target : 0);
  const display = useTransform(count, (v) =>
    decimals !== undefined ? v.toFixed(decimals) : Math.round(v).toString()
  );

  useEffect(() => {
    if (prefersReduced) return;
    if (isInView) {
      const controls = animate(count, target, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, target, duration, prefersReduced]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function StatsBanner() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#141210] via-[#1A1614] to-[#1E1A16] overflow-hidden">
      {/* Top edge fade — warm amber to signal section shift */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
      <AmbientGlow color="#6B4423" position="top-[-200px] left-[-100px]" opacity="opacity-[0.20]" size="w-[700px] h-[700px]" />
      <AmbientGlow color="#BF8F4D" position="bottom-[-150px] right-[-100px]" opacity="opacity-[0.12]" size="w-[600px] h-[600px]" />
      <AmbientGlow color="#4A3520" position="top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" opacity="opacity-[0.08]" size="w-[800px] h-[400px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-bebas text-white mb-6 tracking-wide">
            Nobody Reads Every Page.<br />But Your Clients Think (&amp; Expect) That You Do.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-manrope max-w-3xl mx-auto">
            The average transaction involves 147 pages of documents, 23 critical deadlines, and dozens of potential conflicts between forms. Miss one, and you're explaining to your client why their earnest money is gone.
          </p>
        </motion.div>

        {/* Featured stat — full width */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.5 }}
          className="glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-amber-400 mb-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 hover:bg-white/[0.10] hover:scale-[1.01] transition-all duration-200"
        >
          <div className="flex-shrink-0">
            <div className="font-bebas text-6xl md:text-7xl lg:text-8xl text-amber-400 leading-none">
              <ScrollCounter target={16.3} decimals={1} />%
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <IconHomeCancel size={20} stroke={1.5} className="text-amber-400" aria-hidden="true" />
              <span className="text-xs font-manrope font-semibold uppercase tracking-wider text-amber-400/70">Deal Failure Rate</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bebas text-white mb-1 tracking-wide">
              of deals fell through in December 2025
            </h3>
            <p className="text-sm text-slate-400 font-manrope leading-relaxed">
              A record-high December rate. High housing costs and rising inventory have made buyers more selective than ever.
            </p>
            <a href="https://www.redfin.com/news/home-purchase-cancellations-december-2025/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-600 font-manrope hover:text-slate-400 transition-colors mt-1 inline-block">
              Source: Redfin, January 2026
            </a>
          </div>
        </motion.div>

        {/* 3 stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* E&O claims */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 border-l-2 border-l-amber-400 flex flex-col hover:bg-white/[0.10] hover:scale-[1.01] transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-4">
              <IconGavel size={20} stroke={1.5} className="text-amber-400" aria-hidden="true" />
              <span className="text-xs font-manrope font-semibold uppercase tracking-wider text-slate-500">E&amp;O Risk</span>
            </div>
            <div className="font-bebas text-5xl md:text-6xl text-amber-400 leading-none mb-3">
              1 in <ScrollCounter target={5} />
            </div>
            <h3 className="text-lg font-bebas text-white mb-1 tracking-wide">Texas agents face an E&amp;O claim in their career</h3>
            <p className="text-sm text-slate-400 font-manrope leading-relaxed">
              Defense costs can exceed $100,000 in complex cases, even when you win.
            </p>
            <a href="https://realshieldinsurance.com/errors-and-omissions-insurance-real-estate/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-600 font-manrope hover:text-slate-400 transition-colors mt-1 inline-block">
              Source: NAR via RealShield Insurance
            </a>
          </motion.div>

          {/* #1 litigation source */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 border-l-2 border-l-amber-400 flex flex-col hover:bg-white/[0.10] hover:scale-[1.01] transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-4">
              <IconFileAlert size={20} stroke={1.5} className="text-amber-400" aria-hidden="true" />
              <span className="text-xs font-manrope font-semibold uppercase tracking-wider text-slate-500">Litigation Risk</span>
            </div>
            <div className="font-bebas text-5xl md:text-6xl text-amber-400 leading-none mb-3">
              #<ScrollCounter target={1} />
            </div>
            <h3 className="text-lg font-bebas text-white mb-1 tracking-wide">litigation source: incomplete disclosures</h3>
            <p className="text-sm text-slate-400 font-manrope leading-relaxed">
              Missing signatures, blank sections, and &lsquo;forgot to attach&rsquo; addendums turn into six-figure lawsuits.
            </p>
            <a href="https://www.nar.realtor/magazine/real-estate-news/law-and-ethics/top-claim-against-agents-failure-to-disclose" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-600 font-manrope hover:text-slate-400 transition-colors mt-1 inline-block">
              Source: NAR &amp; CRES Insurance
            </a>
          </motion.div>

          {/* Client retention */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 border-l-2 border-l-[#9DBFBF] flex flex-col hover:bg-white/[0.10] hover:scale-[1.01] transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-4">
              <IconUserCancel size={20} stroke={1.5} className="text-[#9DBFBF]" aria-hidden="true" />
              <span className="text-xs font-manrope font-semibold uppercase tracking-wider text-slate-500">Client Retention</span>
            </div>
            <div className="font-bebas text-5xl md:text-6xl text-[#9DBFBF] leading-none mb-3">
              <ScrollCounter target={12} />%
            </div>
            <h3 className="text-lg font-bebas text-white mb-1 tracking-wide">of clients use their agent again</h3>
            <p className="text-sm text-slate-400 font-manrope leading-relaxed">
              Despite 88% saying they would. Feeling uninformed about documents drives this disconnect.
            </p>
            <span className="text-xs text-slate-600 font-manrope mt-1 inline-block">
              Source: National Association of Realtors
            </span>
          </motion.div>
        </div>

        {/* Solution bridge */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0 }}
          whileInView={prefersReduced ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg md:text-xl text-slate-400 font-manrope">
            This is exactly why we built{" "}
            <span className="text-[#9DBFBF] font-semibold">Contre</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
