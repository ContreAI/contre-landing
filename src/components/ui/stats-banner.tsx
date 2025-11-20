import { motion } from "framer-motion";

interface StatsBannerProps {
  stat?: string;
  source?: string;
  variant?: "default" | "seaglass";
}

export function StatsBanner({
  stat = "90% of Realtors encounter challenges with clients' documents",
  source = "— Adobe, 2024",
  variant = "default"
}: StatsBannerProps) {
  const gradientClass = variant === "seaglass"
    ? "bg-gradient-to-r from-[#9DBFBF] via-[#7BA3A3] to-[#607D3B]"
    : "bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF]";

  return (
    <section className={`w-full ${gradientClass} py-12 md:py-16`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-wide leading-tight">
            {stat}
          </h2>
          <p className="mt-4 text-white/70 text-sm md:text-base font-manrope">
            {source}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
