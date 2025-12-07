"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HowContreWorksBrokerages() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-slate-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #264E36 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-10 font-['Bebas_Neue'] tracking-wide text-center">
            How Contre Actually Works
          </h2>

          {/* Explanatory Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-700 font-['Manrope'] leading-relaxed text-center mb-8"
          >
            Every transaction generates hundreds of pages — contracts, addendums, HOA docs, inspection reports, title work. Buried inside are critical deadlines, financial terms, and conflicts that can kill deals or trigger E&O claims. Most brokerages rely on agents to catch everything. <span className="font-semibold text-[#264E36]">The best ones don't.</span>
          </motion.p>

          {/* Explanatory Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-700 font-['Manrope'] leading-relaxed text-center mb-8"
          >
            Contre uses AI trained specifically on <span className="font-semibold text-[#264E36]">YOUR</span> brokerage's forms and standards — not generic templates. When documents are uploaded, we extract every deadline to a standardized timeline, pull all financial terms, cross-check for conflicts across documents, and flag risks based on your specific requirements. Your agents get a clear, one-page summary. You get a dashboard showing every active transaction and automatic alerts when something needs attention.
          </motion.p>

          {/* Explanatory Paragraph 3 */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-700 font-['Manrope'] leading-relaxed text-center mb-10"
          >
            The result: consistent quality across every agent, every deal — whether it's your newest licensee or your top producer on their 50th transaction this year.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="inline-block group">
              <div className="relative p-[2px] bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] rounded-2xl group-hover:from-[#1a3624] group-hover:via-[#4a5f2d] group-hover:to-[#7da3a3] transition-all duration-300">
                <Button
                  variant="ghost"
                  size="lg"
                  className="relative rounded-[14px] px-10 py-6 text-lg font-semibold
                              bg-white hover:bg-slate-50
                              text-slate-800 transition-all duration-300
                              group-hover:-translate-y-1 group-hover:shadow-xl
                              border-0 backdrop-blur-sm font-['Manrope']"
                  onClick={() => window.open('https://audit.contre.ai', '_blank')}
                >
                  <motion.span
                    className="flex items-center gap-3"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>See a Sample Report</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-xl"
                    >
                      →
                    </motion.span>
                  </motion.span>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
