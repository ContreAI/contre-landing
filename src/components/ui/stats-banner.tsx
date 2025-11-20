import { motion } from "framer-motion";

export function StatsBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-wide leading-tight">
            90% of Realtors encounter challenges with clients' documents
          </h2>
          <p className="mt-4 text-white/70 text-sm md:text-base font-manrope">
            — Adobe, 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
}
