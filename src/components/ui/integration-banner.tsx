"use client"

import { motion } from "framer-motion"

export function IntegrationBanner() {
  return (
    <section className="relative bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] py-4 mt-16 md:mt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white font-['Manrope'] text-sm md:text-base font-semibold">
            🎉 We can integrate this directly into your existing SkySlope or Lonewolf/Transaction Desk Document Management System 🎉
          </p>
        </motion.div>
      </div>
    </section>
  )
}
