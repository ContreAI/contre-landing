"use client"

import { motion } from "framer-motion"
import { Upload, FileCheck, LayoutDashboard } from "lucide-react"

export function HowItWorksBrokerages() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "WE TRAIN ON YOUR BROKERAGE",
      subtitle: "UPLOAD YOUR STANDARDS",
      description: "Send us your purchase agreements, addendums, local forms, HOA templates, and transaction coordinator checklists. Our AI learns what matters to YOUR brokerage—your specific contract clauses, your required deadlines, your quality standards.",
      result: "Every document gets analyzed using your institutional knowledge, not generic real estate rules.",
    },
    {
      number: "02",
      icon: FileCheck,
      title: "YOUR TEAM UPLOADS DOCUMENTS",
      subtitle: "AUTOMATIC CONSISTENCY, EVERY TIME",
      description: "Your transaction coordinators (or agents) upload contracts, HOA docs, inspection reports, title work. That's it. Our system automatically:",
      bullets: [
        "Extracts critical dates to a standardized timeline",
        "Pulls financial terms (purchase price, credits, earnest money)",
        "Flags conflicts across multiple documents",
        "Highlights risk areas based on your brokerage's standards",
      ],
      result: "New agents get the same quality extraction as your veterans. Every single transaction.",
    },
    {
      number: "03",
      icon: LayoutDashboard,
      title: "YOU MAINTAIN FULL OVERSIGHT",
      subtitle: "BROKERAGE DASHBOARD + INSTANT ALERTS",
      description: "Access your brokerage-wide dashboard to monitor all active transactions. Get automatic notifications when:",
      bullets: [
        "Critical deadlines are approaching across any deal",
        "Document conflicts are detected",
        "High-risk terms are flagged",
        "Agents need to take immediate action",
      ],
      result: "You spot problems before they become emergencies—no more finding out about issues when agents panic-call you at 9pm.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-[#264E36] mb-6">
            Zero Agent Adoption Friction. Complete Brokerage Control.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-['Manrope'] max-w-3xl mx-auto">
            Three simple steps to standardize every transaction across your entire brokerage—no matter who's handling the deal.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connecting Line (hidden on mobile, shown between steps on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#264E36]/20 to-transparent" />
              )}

              {/* Step Card */}
              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                {/* Step Number */}
                <div className="absolute -top-6 -left-4 w-16 h-16 bg-gradient-to-br from-[#264E36] via-[#607D3B] to-[#9DBFBF] rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold font-['Bebas_Neue'] text-white">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-4 mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-[#9DBFBF]/20 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-[#264E36]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold font-['Bebas_Neue'] text-[#264E36] mb-2 text-center">
                  {step.title}
                </h3>
                <h4 className="text-lg font-semibold font-['Bebas_Neue'] text-[#607D3B] mb-4 text-center">
                  {step.subtitle}
                </h4>
                <p className="text-slate-600 font-['Manrope'] text-left leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Bullets if present */}
                {step.bullets && (
                  <ul className="space-y-2 mb-4">
                    {step.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2 text-slate-600 font-['Manrope'] text-sm">
                        <span className="text-[#607D3B] mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Result */}
                <p className="text-slate-700 font-['Manrope'] text-left leading-relaxed italic text-sm border-l-4 border-[#607D3B] pl-4 mt-4">
                  <strong>The result:</strong> {step.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
