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

const items = [
  {
    id: "1",
    title: "What's included in the agent subscription?",
    content:
      "Both Monthly and Annual subscriptions include AI-powered deadline extraction, one-page summaries for each contract, client chatbot access, and email support. Monthly includes 1 transaction per month (additional at $27.99 each), while Annual includes 12 transactions per year (additional at $22.99 each). Annual subscribers also get priority support.",
  },
  {
    id: "2",
    title: "Can I switch between plans?",
    content:
      "Yes! You can upgrade from Monthly to Annual at any time and we'll pro-rate your existing payment. Downgrading from Annual to Monthly takes effect at the end of your current billing cycle. For per-transaction purchases, you can always buy single analyses without affecting any subscription.",
  },
  {
    id: "3",
    title: "What counts as a transaction for brokerage pricing?",
    content:
      "A transaction is a single real estate deal, regardless of how many documents are uploaded. You can upload unlimited documents (purchase agreement, addendums, HOA docs, inspection reports, etc.) for one transaction—it all counts as one.",
  },
  {
    id: "4",
    title: "Is there a free trial?",
    content:
      "Every account starts with 2 free documents — no credit card required. Upload your real contracts and see exactly how Contre works before committing to a plan. For brokerages, we also provide a complimentary demo with your actual forms to show the custom training process.",
  },
  {
    id: "5",
    title: "How does brokerage billing work?",
    content:
      "Brokerages are billed monthly based on your selected tier. If you exceed your included transactions, overage charges are added to your next invoice at the per-transaction rate for your tier. You can upgrade tiers anytime to get better per-transaction rates.",
  },
  {
    id: "6",
    title: "What happens if we exceed our monthly transaction limit?",
    content:
      "You're never cut off. Transactions beyond your tier limit are billed at the overage rate for that tier. For example, on the Growth plan (50 deals), overage is $25/transaction. If you're consistently exceeding, upgrading to the next tier usually saves money.",
  },
  {
    id: "7",
    title: "Why is individual per-transaction pricing higher than brokerage pricing?",
    content:
      "Brokerage pricing is volume-based—the more transactions, the lower the per-deal cost. Individual agents doing occasional transactions pay $49.99/deal, while brokerages committing to volume get rates as low as $15/transaction. For agents doing 2+ deals/month, the subscription is usually the better value.",
  },
  {
    id: "8",
    title: "What's the 3-month minimum for monthly subscriptions?",
    content:
      "Monthly subscriptions require a 3-month initial commitment, then continue month-to-month. This allows us to properly onboard you and ensure you're getting value. After 3 months, you can cancel anytime with 30 days notice.",
  },
  {
    id: "9",
    title: "Do you offer discounts for large brokerages?",
    content:
      "For brokerages processing more than 100 transactions per month, we offer custom enterprise pricing with volume discounts, dedicated account management, custom integrations, and priority support. Contact us for a tailored quote.",
  },
  {
    id: "10",
    title: "Do I pay per seat or per team member?",
    content:
      "No — we never charge per seat. You can add unlimited team members including agents, assistants, transaction coordinators, and admins at no extra cost. You only pay per transaction. Whether your brokerage has 5 agents or 500, the pricing stays the same.",
  },
  {
    id: "11",
    title: "What payment methods do you accept?",
    content:
      "We accept all major credit cards for individual agents. Brokerages can pay by credit card, ACH bank transfer, or invoice (net-30 terms available for qualifying accounts).",
  },
];

export function PricingFAQSection() {
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
          <h2 className="text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-white mb-6 tracking-wide">
            Pricing Questions
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-['Manrope']">
            Everything you need to know about our plans and billing
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
                  <span className="text-sm font-semibold text-[#9DBFBF] font-['Manrope'] min-w-[24px]">
                    {item.id.padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold font-['Bebas_Neue'] text-white group-hover:text-[#9DBFBF] transition-colors flex-1">
                    {item.title}
                  </h3>
                </div>
              </AccordionTrigger>

              <AccordionContent className="text-slate-400 font-['Manrope'] text-base md:text-lg leading-relaxed pl-12 pr-4 pb-6">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
