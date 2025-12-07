"use client"

import { motion } from "framer-motion"
import { Upload, FileSearch, MessageCircle } from "lucide-react"

export function HowItWorksAgents() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload your contract — takes 30 seconds",
    },
    {
      number: "02",
      icon: FileSearch,
      title: "Get your analysis — every deadline, every red flag, every conflict",
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Never wonder what you missed — send with confidence",
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
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-['Manrope'] max-w-2xl mx-auto">
            Three simple steps to protect your deals and never miss a critical detail again.
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
                <h3 className="text-xl font-semibold font-['Manrope'] text-[#264E36] text-center">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
