"use client"

import { cn } from "@/lib/utils";
import {
  Clock,
  MessageCircle,
  Search,
  FileText,
} from "lucide-react";

export function FeatureCardsAgents() {
  const features = [
    {
      title: "5-Minute Document Analysis",
      description:
        "Upload every document from your deal—purchase agreement, inspection, title, HOA docs—and get professional summaries of all of them in under 5 minutes. No more late nights skimming 200-page packets.",
      benefit: "Process entire deals in the time it takes to return a phone call",
      icon: <Clock className="h-12 w-12" strokeWidth={1.5} />,
    },
    {
      title: "24/7 Client Chatbot",
      description:
        "Send your clients a private chatbot link. Now when they're reading the inspection at midnight and have questions, they get instant answers—without texting you. You wake up to \"This is so helpful, thank you!\"",
      benefit: "Impress clients with access no other agent offers",
      icon: <MessageCircle className="h-12 w-12" strokeWidth={1.5} />,
    },
    {
      title: "Instant Answers to Any Question",
      description:
        "\"What does the title say about easements?\" \"Are pools allowed per HOA?\" Ask your AI assistant anything about any document and get the exact answer with page references in seconds.",
      benefit: "Never say \"let me check and get back to you\" again",
      icon: <Search className="h-12 w-12" strokeWidth={1.5} />,
    },
    {
      title: "Professional Document Summaries",
      description:
        "Generate clean, client-ready summaries of inspections, title work, and HOA restrictions that look like you spent hours reading every detail. Your clients have never seen this level of thoroughness.",
      benefit: "Stand out as the most detail-oriented agent they've worked with",
      icon: <FileText className="h-12 w-12" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-[#37474F] mb-6">
            5 Minutes to Analyze Every Document. Look Like You Read Every Page.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-['Manrope'] max-w-3xl mx-auto">
            Upload your transaction documents once. Get instant summaries, a 24/7 client chatbot, and answers to any question—making you look more professional than every other agent your clients have worked with.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  benefit,
  icon,
  index,
}: {
  title: string;
  description: string;
  benefit: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-16 px-8 relative group/feature border-slate-200 min-h-[400px]",
        (index === 0) && "lg:border-l border-slate-200",
        "lg:border-b border-slate-200"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#9DBFBF]/10 to-transparent pointer-events-none" />

      <div className="mb-6 relative z-10 text-[#264E36]">
        {icon}
      </div>
      <div className="text-2xl font-bold mb-4 relative z-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-300 group-hover/feature:bg-gradient-to-b group-hover/feature:from-[#264E36] group-hover/feature:to-[#607D3B] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#37474F] font-['Bebas_Neue'] text-3xl pl-4">
          {title}
        </span>
      </div>
      <p className="text-base text-slate-600 relative z-10 font-['Manrope'] pl-4 mb-4">
        {description}
      </p>
      <div className="mt-auto relative z-10 pl-4">
        <p className="text-sm font-semibold text-[#264E36] font-['Manrope'] italic">
          → {benefit}
        </p>
      </div>
    </div>
  );
};
