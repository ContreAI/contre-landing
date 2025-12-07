"use client";

import { motion } from "framer-motion";

const documents = [
  { document: "100-page HOA", result: "1-page summary" },
  { document: "50-page title report", result: "1-page red flag report" },
  { document: "Purchase agreement", result: "Every deadline, tracked" },
];

export function DocumentTable() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-bebas text-[#264E36] mb-4 tracking-wide">
            Every Document. One Page. Everything That Matters.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-manrope max-w-2xl mx-auto">
            Contre reads everything so you don't have to — then gives you exactly what you need to protect the deal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
            {/* Header */}
            <div className="grid grid-cols-2 bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#4a6b2f]">
              <div className="px-6 py-4 md:px-8 md:py-5">
                <h3 className="font-bebas text-xl md:text-2xl text-white tracking-wide">
                  The Document
                </h3>
              </div>
              <div className="px-6 py-4 md:px-8 md:py-5 border-l border-white/20">
                <h3 className="font-bebas text-xl md:text-2xl text-white tracking-wide">
                  What You Get
                </h3>
              </div>
            </div>

            {/* Rows */}
            {documents.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`grid grid-cols-2 ${
                  index % 2 === 0
                    ? "bg-white dark:bg-slate-800"
                    : "bg-slate-50 dark:bg-slate-800/50"
                } ${
                  index !== documents.length - 1
                    ? "border-b border-slate-200 dark:border-slate-700"
                    : ""
                }`}
              >
                <div className="px-6 py-5 md:px-8 md:py-6">
                  <p className="font-manrope text-base md:text-lg text-slate-700 dark:text-slate-300">
                    {item.document}
                  </p>
                </div>
                <div className="px-6 py-5 md:px-8 md:py-6 border-l border-slate-200 dark:border-slate-700">
                  <p className="font-manrope text-base md:text-lg font-semibold text-[#264E36] dark:text-[#9DBFBF]">
                    {item.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
