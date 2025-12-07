"use client";

import { cn } from "@/lib/utils";
import {
  IconHomeCancel,
  IconGavel,
  IconFileAlert,
  IconUserCancel,
} from "@tabler/icons-react";

const features = [
  {
    title: "15.7% of deals fell through in 2023",
    description:
      "The highest rate in nearly a year. Each failed deal costs brokerages an average commission of $7,500-$15,000.",
    icon: <IconHomeCancel size={48} stroke={1.5} />,
  },
  {
    title: "1 in 5 professionals face an E&O claim",
    description:
      "Defense costs alone typically exceed $100,000, even when you win.",
    icon: <IconGavel size={48} stroke={1.5} />,
  },
  {
    title: "Incomplete disclosures = #1 litigation source",
    description:
      "Missing signatures, blank sections, and 'forgot to attach' addendums turn into six-figure lawsuits when buyers discover issues after closing.",
    icon: <IconFileAlert size={48} stroke={1.5} />,
  },
  {
    title: "Only 12% of clients use their agent again",
    description:
      "Despite 88% saying they would. Poor communication and feeling uninformed about documents drives this disconnect.",
    icon: <IconUserCancel size={48} stroke={1.5} />,
  },
];

export function StatsBanner() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-bebas text-white mb-6 tracking-wide">
            Nobody Reads Every Page.<br />But Your Clients Think (& Expect) That You Do.
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-manrope max-w-3xl mx-auto">
            The average transaction involves 147 pages of documents, 23 critical deadlines, and dozens of potential conflicts between forms. Miss one, and you're explaining to your client why their earnest money is gone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-8 px-6 relative group/feature rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
      )}
    >
      <div className="mb-4 relative z-10 text-white">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <span className="group-hover/feature:translate-x-1 transition duration-200 inline-block text-white font-bebas text-2xl">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/70 relative z-10 font-manrope">
        {description}
      </p>
    </div>
  );
};
