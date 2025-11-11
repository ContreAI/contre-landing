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
    title: "How accurate is the AI? What if it misses something?",
    content:
      "Every document goes through multiple layers of AI analysis with independent verification at each stage. Multiple AI models cross-verify findings before alerting you, ensuring high accuracy. Contre flags potential issues for your professional review—think of it as multiple expert reviewers working in parallel who never get tired.",
  },
  {
    id: "2",
    title: "Is my client data secure and compliant?",
    content:
      "Absolutely. All data is encrypted with enterprise-grade security. We use secure cloud infrastructure with multi-factor authentication and strict access controls. Your transaction data is never shared, never used for training, and only you can access your client documents.",
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
      "5 minutes. Create an account, upload your first transaction documents, and you're ready to go. No training required, no technical setup—just upload and start getting answers.",
  },
  {
    id: "5",
    title: "Do I need to change my current workflow?",
    content:
      "No. Contre fits into your existing process—you just upload documents like you normally would, then get instant summaries and answers. Keep using SkySlope, DocuSign, or whatever tools you already use. Contre is an add-on that makes you look better, not a replacement for anything.",
  },
  {
    id: "6",
    title: "How much does this cost for individual agents?",
    content:
      "We offer flexible pricing for individual agents. Saving just one deal from falling through—or winning one listing because you impressed them with your thoroughness—pays for months of service. Most agents find the ROI is immediate when clients start referring them because they're 'so organized.'",
  },
  {
    id: "7",
    title: "Can you integrate with our SkySlope/LoneWolf system?",
    content:
      "Yes. Direct integrations with both platforms sync transaction data automatically. No duplicate data entry, no workflow changes. Documents flow directly into Contre for analysis.",
  },
  {
    id: "8",
    title: "What if I work with different contract forms across different deals?",
    content:
      "No problem. Contre works with any real estate document—whether you're dealing with residential, commercial, different state forms, or custom contracts. Just upload whatever documents you have for each transaction and the AI adapts automatically.",
  },
  {
    id: "9",
    title: "How much time does this actually save me per transaction?",
    content:
      "Agents report saving 2-5 hours per deal on document review and client questions. The bigger win? Zero late-night texts because clients have 24/7 chatbot access.",
  },
  {
    id: "10",
    title: "Can my clients tell I'm using AI, or does it look like I did all this work?",
    content:
      "Clients see branded reports with YOUR name/logo and a professional chatbot interface. They just think you're the most organized agent they've ever worked with.",
  },
  {
    id: "11",
    title: "What if I'm at a brokerage that doesn't use Contre?",
    content:
      "Individual agents can sign up for themselves. If your brokerage adopts it later, your account seamlessly converts to the company system.",
  },
];

export function FAQSectionAgents() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-[#37474F] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-['Manrope']">
            Everything you need to know about Contre
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
                  <h3 className="text-2xl md:text-3xl font-semibold font-['Bebas_Neue'] text-[#37474F] group-hover:text-[#264E36] transition-colors flex-1">
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
