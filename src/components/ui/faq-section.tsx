"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AmbientGlow } from "@/components/ui/ambient-glow";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { motion } from "framer-motion";

const defaultItems = [
  {
    id: "1",
    title: "How accurate is the AI? What if it misses something?",
    content:
      "Every document goes through multiple layers of AI analysis with independent verification at each stage. Multiple AI models cross-verify findings before alerting you, ensuring high accuracy. Contre flags potential issues for your professional review—think of it as multiple expert reviewers working in parallel who never get tired.",
  },
  {
    id: "2",
    title: "Is my client data secure and compliant?",
    content:
      "Absolutely. All data is encrypted with enterprise-grade security and complete isolation between brokerages. We use secure cloud infrastructure with multi-factor authentication and strict access controls. Your transaction data is never shared, never used for training, and only your team can access it.",
  },
  {
    id: "3",
    title: "What types of documents can Contre analyze?",
    content:
      "Purchase agreements, addendums, inspection reports, HOA documents, title work, disclosures, septic reports, environmental assessments—any document in your transaction. We support PDFs, scanned images, and multi-page documents.",
  },
  {
    id: "4",
    title: "How long does setup take?",
    content:
      "Individual agents: 5 minutes. Brokerages: 1-2 weeks for custom training on your specific forms and standards, then your entire team has access.",
  },
  {
    id: "5",
    title: "Can you integrate with our SkySlope/LoneWolf system?",
    content:
      "Yes. Direct integrations with both platforms sync transaction data automatically. No duplicate data entry, no workflow changes. Documents flow directly into Contre for analysis.",
  },
  {
    id: "6",
    title: "How much time does this actually save me per transaction?",
    content:
      "Agents report saving 2-5 hours per deal on document review and client questions. The bigger win? Zero late-night texts because clients have 24/7 chatbot access.",
  },
];

interface FAQSectionProps {
  items?: { id: string; title: string; content: string }[];
}

export function FAQSection({ items = defaultItems }: FAQSectionProps) {
  const prefersReduced = useReducedMotion();
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#112A1E] via-[#0D1A14] to-[#112A1E] overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9DBFBF]/10 to-transparent" />
      <AmbientGlow color="#9DBFBF" position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" opacity="opacity-[0.08]" size="w-[700px] h-[700px]" />
      <AmbientGlow color="#264E36" position="top-[-100px] left-[-100px]" opacity="opacity-[0.10]" size="w-[400px] h-[400px]" />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-semibold font-bebas text-white mb-6 tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-manrope">
            Everything you need to know about Contre
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="border-white/[0.08] last:border-b hover:bg-white/[0.02] transition-colors duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline group [&>svg]:text-[#9DBFBF] [&>svg]:h-5 [&>svg]:w-5 [&>svg]:group-hover:text-[#b3d0d0]">
                <div className="flex items-center gap-4 w-full">
                  <span className="text-sm font-semibold text-[#9DBFBF] font-manrope min-w-[24px]">
                    {item.id.padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold font-bebas text-white group-hover:text-[#9DBFBF] transition-colors flex-1">
                    {item.title}
                  </h3>
                </div>
              </AccordionTrigger>

              <AccordionContent className="text-slate-400 font-manrope text-base md:text-lg leading-relaxed pl-12 pr-4 pb-6">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
