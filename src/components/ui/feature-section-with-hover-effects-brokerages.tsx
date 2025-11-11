import { cn } from "@/lib/utils";
import {
  IconHomeCancel,
  IconClock,
  IconGavel,
  IconFileAlert,
  IconHomeMinus,
  IconUserCancel,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffectsBrokerages() {
  const features = [
    {
      title: "15.7% of deals fell through in 2023",
      description:
        "The highest rate in nearly a year. Each failed deal costs brokerages an average commission of $7,500-$15,000.",
      icon: <IconHomeCancel size={48} stroke={1.5} />,
    },
    {
      title: "5-10 HOURS PER TRANSACTION ON DOCUMENTS",
      description:
        "Between reviewing contracts, HOA packets, inspection reports, and title work, that's over a full business day per deal spent hunting for critical details. For a 30-agent brokerage doing 150 deals annually, that's 750-1,500 hours of unbillable time—nearly 100-200 full work days your team spends skimming documents instead of closing more deals.",
      icon: <IconClock size={48} stroke={1.5} />,
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
      title: "73% of homeowners backed out in 2023",
      description:
        "Unclear expectations and missed contract details were major contributing factors.",
      icon: <IconHomeMinus size={48} stroke={1.5} />,
    },
    {
      title: "Only 12% of clients use their agent again",
      description:
        "Despite 88% saying they would. Poor communication and feeling uninformed about documents drives this disconnect.",
      icon: <IconUserCancel size={48} stroke={1.5} />,
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-[#37474F] mb-6">
            Nobody Reads Every Page.<br />But Your Clients Think (& Expect) That You Do.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-['Manrope'] max-w-3xl mx-auto">
            The average transaction involves 147 pages of documents, 23 critical deadlines, and dozens of potential conflicts between forms. Miss one, and you're explaining to your client why their earnest money is gone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
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
        "flex flex-col lg:border-r py-10 relative group/feature border-slate-200",
        (index === 0 || index === 3) && "lg:border-l border-slate-200",
        index < 3 && "lg:border-b border-slate-200"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#9DBFBF]/10 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#9DBFBF]/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#264E36]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-300 group-hover/feature:bg-gradient-to-b group-hover/feature:from-[#264E36] group-hover/feature:to-[#607D3B] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#37474F] font-['Bebas_Neue'] text-2xl">
          {title}
        </span>
      </div>
      <p className="text-sm text-slate-600 max-w-xs relative z-10 px-10 font-['Manrope']">
        {description}
      </p>
    </div>
  );
};
