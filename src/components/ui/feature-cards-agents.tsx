"use client"

import { cn } from "@/lib/utils";
import {
  FileSearch,
  MessageCircle,
  Bell,
  FileText,
} from "lucide-react";

export function FeatureCardsAgents() {
  const features = [
    {
      title: "Instant Contract Analysis",
      description:
        "Upload any document, get a one-page summary in 60 seconds. Every deadline, red flag, and action item — surfaced before it costs you.",
      benefit: "Know more than the other agent",
      icon: <FileSearch className="h-12 w-12" strokeWidth={1.5} />,
    },
    {
      title: "24/7 Client Chatbot",
      description:
        "Share a secure link with clients. They ask questions anytime — \"When's the inspection?\" \"What stays?\" — and get instant answers from their actual documents.",
      benefit: "Sleep through the night",
      icon: <MessageCircle className="h-12 w-12" strokeWidth={1.5} />,
    },
    {
      title: "Deadline Tracking & Alerts",
      description:
        "Never miss a critical date. Automatic reminders before deadlines hit so you're always one step ahead.",
      benefit: "Never scramble again",
      icon: <Bell className="h-12 w-12" strokeWidth={1.5} />,
    },
    {
      title: "Professional Client Reports",
      description:
        "Share polished summaries with clients. Look like you read every page — because Contre did.",
      benefit: "Win more referrals",
      icon: <FileText className="h-12 w-12" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-semibold font-bebas text-[#37474F] mb-6">
            For Agents: Your Unfair Advantage
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-manrope max-w-3xl mx-auto">
            Look like you read every page. Catch what others miss. Close more deals with confidence.
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
        "flex flex-col lg:border-r py-16 px-8 relative group/feature border-slate-200 min-h-[400px] bg-white",
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
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#37474F] font-bebas text-3xl pl-4">
          {title}
        </span>
      </div>
      <p className="text-base text-slate-600 relative z-10 font-manrope pl-4 mb-4">
        {description}
      </p>
      <div className="mt-auto relative z-10 pl-4">
        <p className="text-sm font-semibold text-[#264E36] font-manrope italic">
          → {benefit}
        </p>
      </div>
    </div>
  );
};
