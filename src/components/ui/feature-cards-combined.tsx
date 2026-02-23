"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Plug,
  FileSearch,
  MessageCircle,
  Bell,
  FileText,
  Building2,
  User,
} from "lucide-react"
import { AmbientGlow } from "@/components/ui/ambient-glow"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const brokerageFeatures = [
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
]

const agentFeatures = [
  {
    title: "Instant Contract Analysis",
    description:
      "Upload any document, get a one-page summary in 60 seconds. Every deadline, red flag, and action item — surfaced before it costs you.",
    benefit: "Know more than the other agent",
    icon: FileSearch,
  },
  {
    title: "24/7 Client Chatbot",
    description:
      "Share a secure link with clients. They ask questions anytime — \"When's the inspection?\" \"What stays?\" — and get instant answers from their actual documents.",
    benefit: "Sleep through the night",
    icon: MessageCircle,
  },
  {
    title: "Deadline Tracking & Alerts",
    description:
      "Never miss a critical date. Automatic reminders before deadlines hit so you're always one step ahead.",
    benefit: "Never scramble again",
    icon: Bell,
  },
  {
    title: "Professional Client Reports",
    description:
      "Share polished summaries with clients. Look like you read every page — because Contre did.",
    benefit: "Win more referrals",
    icon: FileText,
  },
]

const tabs = [
  {
    id: "brokerages",
    label: "For Brokerages",
    icon: Building2,
    headline: "Turn Your Best Practices Into Institutional Intelligence",
    subheadline:
      "Custom training on YOUR forms, YOUR processes, and YOUR compliance standards. New agents perform like veterans from day one.",
    features: brokerageFeatures,
  },
  {
    id: "agents",
    label: "For Agents",
    icon: User,
    headline: "Your Unfair Advantage",
    subheadline:
      "Look like you read every page. Catch what others miss. Close more deals with confidence.",
    features: agentFeatures,
  },
]

export function FeatureCardsCombined() {
  const [activeTab, setActiveTab] = useState("brokerages")
  const prefersReduced = useReducedMotion()
  const active = tabs.find((t) => t.id === activeTab)!

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#141312] via-[#181716] to-[#141312] overflow-hidden">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <AmbientGlow color="#264E36" position="top-[-200px] right-[-150px]" opacity="opacity-[0.06]" size="w-[500px] h-[500px]" />
      <AmbientGlow color="#9DBFBF" position="bottom-[-150px] left-[-100px]" opacity="opacity-[0.04]" size="w-[400px] h-[400px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Tab switcher */}
          <div className="inline-flex items-center bg-white/[0.04] border border-white/[0.08] rounded-full p-1 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-['Manrope'] font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white/[0.10] text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <tab.icon className="w-4 h-4" aria-hidden="true" />
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
              animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, y: -10 }}
              transition={prefersReduced ? { duration: 0 } : { duration: 0.3 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-bebas text-white mb-6 tracking-wide">
                {active.headline}
              </h2>
              <p className="text-lg md:text-xl text-slate-400 font-manrope max-w-3xl mx-auto">
                {active.subheadline}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Feature grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
            animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: -16 }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {active.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
                animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                transition={prefersReduced ? { duration: 0 } : { duration: 0.4, delay: index * 0.08 }}
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
