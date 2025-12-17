"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const items = [
  {
    id: "1",
    title: "What's included in the agent subscription?",
    content:
      "Both Monthly and Annual subscriptions include unlimited contract analyses, AI-powered deadline extraction, one-page summaries for each contract, client chatbot access, and email support. Annual subscribers also get priority support, early access to new features, and custom report branding.",
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
      "We offer a free first contract analysis so you can see exactly how Contre works with your documents. No credit card required. For brokerages, we provide a complimentary demo with your actual forms to show the custom training process.",
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
    title: "What payment methods do you accept?",
    content:
      "We accept all major credit cards for individual agents. Brokerages can pay by credit card, ACH bank transfer, or invoice (net-30 terms available for qualifying accounts).",
  },
];

export function PricingFAQSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-[#37474F] mb-6">
            Pricing Questions
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-['Manrope']">
            Everything you need to know about our plans and billing
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="border-slate-200 last:border-b"
            >
              <AccordionTrigger className="text-left hover:no-underline group">
                <div className="flex items-center gap-4 w-full">
                  <span className="text-sm font-semibold text-[#264E36] font-['Manrope'] min-w-[24px]">
                    {item.id.padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold font-['Bebas_Neue'] text-[#37474F] group-hover:text-[#264E36] transition-colors flex-1">
                    {item.title}
                  </h3>
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#264E36] transition-transform duration-200" />
                </div>
              </AccordionTrigger>

              <AccordionContent className="text-slate-600 font-['Manrope'] text-base md:text-lg leading-relaxed pl-12 pr-4 pb-6">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
