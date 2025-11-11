"use client"

import { cn } from "@/lib/utils";
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Plug,
} from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      title: "Custom Document Training",
      description:
        "Upload examples of your best contracts, your specific addendums, and your compliance requirements. Our AI learns what 'good' looks like at YOUR brokerage—then applies that standard to every transaction.",
      benefit: "New agents get instant feedback against your top producers' standards",
      icon: <GraduationCap className="h-12 w-12" strokeWidth={1.5} />,
    },
    {
      title: "Brokerage Dashboard & Oversight",
      description:
        "Track every transaction's status, see flagged risks across your entire team, and get automated alerts when deals need attention. Transaction coordinators manage workflow in one central dashboard.",
      benefit: "Catch problems before they become E&O claims",
      icon: <LayoutDashboard className="h-12 w-12" strokeWidth={1.5} />,
    },
    {
      title: "Centralized Knowledge Base",
      description:
        "All your training materials, local market requirements, preferred vendors, and internal processes in one searchable system. Every agent has access to the same expert-level information.",
      benefit: "Stop answering the same questions 50 times",
      icon: <BookOpen className="h-12 w-12" strokeWidth={1.5} />,
    },
    {
      title: "Platform Integrations",
      description:
        "Direct integrations with SkySlope, LoneWolf, and other transaction management platforms. No duplicate data entry, no workflow disruption.",
      benefit: "Adopt without changing how your team works",
      icon: <Plug className="h-12 w-12" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-[#37474F] mb-6">
            For Brokers: Turn Your Best Practices Into Institutional Intelligence
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-['Manrope'] max-w-3xl mx-auto">
            Custom training on YOUR forms, YOUR processes, and YOUR compliance standards. New agents perform like veterans from day one.
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
