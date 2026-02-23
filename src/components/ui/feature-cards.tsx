"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Plug,
  Building2,
} from "lucide-react";
import { AmbientGlow } from "@/components/ui/ambient-glow";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const features = [
  {
    title: "Custom Document Training",
    description:
      "Upload examples of your best contracts, your specific addendums, and your compliance requirements. Our AI learns what 'good' looks like at YOUR brokerage — then applies that standard to every transaction.",
    benefit: "New agents get instant feedback against your top producers' standards",
    icon: GraduationCap,
  },
  {
    title: "Brokerage Dashboard & Oversight",
    description:
      "Track every transaction's status, see flagged risks across your entire team, and get automated alerts when deals need attention. Transaction coordinators manage workflow in one central dashboard.",
    benefit: "Catch problems before they become E&O claims",
    icon: LayoutDashboard,
  },
  {
    title: "Centralized Knowledge Base",
    description:
      "All your training materials, local market requirements, preferred vendors, and internal processes in one searchable system. Every agent has access to the same expert-level information.",
    benefit: "Stop answering the same questions 50 times",
    icon: BookOpen,
  },
  {
    title: "Platform Integrations",
    description:
      "Direct integrations with SkySlope, LoneWolf, and other transaction management platforms. No duplicate data entry, no workflow disruption.",
    benefit: "Adopt without changing how your team works",
    icon: Plug,
  },
];

export function FeatureCards() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#141312] via-[#181716] to-[#141312] overflow-hidden">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      {/* Subtle glows — staying in brand palette */}
      <AmbientGlow color="#264E36" position="top-[-200px] right-[-150px]" opacity="opacity-[0.06]" size="w-[500px] h-[500px]" />
      <AmbientGlow color="#9DBFBF" position="bottom-[-150px] left-[-100px]" opacity="opacity-[0.04]" size="w-[400px] h-[400px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Persona badge */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5 mb-6"
          >
            <Building2 className="w-3.5 h-3.5 text-[#9DBFBF]" aria-hidden="true" />
            <span className="text-xs font-manrope font-semibold text-slate-400">For Brokerages</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-bebas text-white mb-6 tracking-wide">
            Turn Your Best Practices Into<br className="hidden md:block" /> Institutional Intelligence
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-manrope max-w-3xl mx-auto">
            Custom training on YOUR forms, YOUR processes, and YOUR compliance standards. New agents perform like veterans from day one.
          </p>
        </motion.div>

        {/* 2-column feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={prefersReduced ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl p-6 md:p-8 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex gap-5 md:gap-6 hover:bg-white/[0.08] hover:border-white/[0.14] hover:shadow-[0_4px_24px_rgba(157,191,191,0.06)] hover:scale-[1.01] transition-all duration-200"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#9DBFBF]/[0.08] rounded-xl flex items-center justify-center group-hover:bg-[#9DBFBF]/[0.14] transition-colors duration-200">
                <feature.icon className="w-6 h-6 text-[#9DBFBF]" strokeWidth={1.5} aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="text-2xl font-semibold font-bebas text-white mb-2 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 font-manrope leading-relaxed mb-3">
                  {feature.description}
                </p>
                <p className="text-sm font-semibold text-[#9DBFBF] font-manrope">
                  → {feature.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
