"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, FileText, ShieldAlert } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AmbientGlow } from "@/components/ui/ambient-glow";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { motion } from "framer-motion";
import { APP_URL } from "@/lib/config";
import { trackCTAClick } from "@/lib/gtag";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface FeatureTabsProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const FeatureTabs = ({
  badge = "How Contre Works",
  heading = "Three Ways Contre Protects Your Deals",
  description = "Upload your documents. We handle the rest. Your clients think you're a genius.",
  tabs = [
    {
      value: "tab-1",
      icon: <MessageCircle className="h-auto w-4 shrink-0" aria-hidden="true" />,
      label: "24/7 Client Access",
      content: {
        badge: "Client Communication",
        title: "Your clients get answers at 2 AM. You sleep through the night.",
        description:
          "Share a secure chatbot link after every contract signing. Your clients ask questions anytime—'When's the inspection?' 'What appliances stay?' 'Who pays for repairs?'—and get instant answers from their actual documents. No more repetitive texts. No more 'let me check and get back to you.'",
        buttonText: "See the Chatbot in Action",
        imageSrc:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        imageAlt: "Chat interface showing client questions and answers",
      },
    },
    {
      value: "tab-2",
      icon: <FileText className="h-auto w-4 shrink-0" aria-hidden="true" />,
      label: "Professional Reports",
      content: {
        badge: "Client Deliverables",
        title: "Send them something they'll forward to their entire family.",
        description:
          "Stop explaining contingency periods over text. Automatically generate clean, branded timeline reports showing every critical deadline in plain English. Your clients finally understand what happens when—and they think you're the most organized agent they've ever met.",
        buttonText: "View Sample Report",
        imageSrc:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        imageAlt: "Professional timeline report showing critical deadlines",
      },
    },
    {
      value: "tab-3",
      icon: <ShieldAlert className="h-auto w-4 shrink-0" aria-hidden="true" />,
      label: "Proactive Protection",
      content: {
        badge: "Behind The Scenes",
        title: "Catch problems before your clients ever know they existed.",
        description:
          "Missing seller credit? Unsigned disclosure? Conflicting payment terms? You're alerted immediately with clear explanations. Fix it quietly. Your clients just think you're incredibly detail-oriented. (They'll never know how close they came to a problem.)",
        buttonText: "See What We Catch",
        imageSrc:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        imageAlt: "Alert dashboard showing flagged document issues",
      },
    },
  ],
}: FeatureTabsProps) => {
  const prefersReduced = useReducedMotion();
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0D1A14] via-[#112A1E] to-[#112A1E] overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#607D3B]/12 to-transparent" />
      <AmbientGlow color="#264E36" position="top-[-200px] right-[-100px]" opacity="opacity-[0.16]" size="w-[700px] h-[700px]" />
      <AmbientGlow color="#9DBFBF" position="bottom-[-150px] left-[-100px]" opacity="opacity-[0.12]" size="w-[500px] h-[500px]" />
      <AmbientGlow color="#607D3B" position="top-[30%] left-[50%] -translate-x-1/2" opacity="opacity-[0.06]" size="w-[600px] h-[300px]" />
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
        >
          <Badge
            variant="outline"
            className="font-manrope text-[#9DBFBF] border-[#9DBFBF]/20 bg-white/[0.05]"
          >
            {badge}
          </Badge>
          <h2 className="max-w-2xl text-5xl md:text-7xl font-semibold font-bebas text-white tracking-wide">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-manrope">{description}</p>
        </motion.div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent h-auto p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold font-manrope text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] data-[state=active]:bg-white/[0.10] data-[state=active]:text-[#9DBFBF] data-[state=active]:border data-[state=active]:border-[#9DBFBF]/[0.15] data-[state=active]:shadow-[0_0_12px_rgba(157,191,191,0.08)] transition-all duration-300"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl glass-card p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge
                    variant="outline"
                    className="w-fit bg-white/[0.05] font-manrope text-[#9DBFBF] border-[#9DBFBF]/20"
                  >
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl font-bebas text-white tracking-wide">
                    {tab.content.title}
                  </h3>
                  <p className="text-slate-400 lg:text-lg font-manrope">
                    {tab.content.description}
                  </p>
                  <Button
                    size="lg"
                    className="mt-2.5 w-fit rounded-xl px-8 py-6 text-base font-semibold
                                bg-white hover:bg-gray-100
                                text-[#0D1A14] transition-all duration-200
                                hover:-translate-y-0.5 shadow-soft-lg
                                hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)]
                                border-0 font-manrope"
                    onClick={() => { trackCTAClick(tab.content.buttonText); window.open(`${APP_URL}/authentication/signup`, '_blank') }}
                  >
                    {tab.content.buttonText}
                  </Button>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl shadow-soft-lg w-full h-auto object-cover border border-white/[0.08]"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { FeatureTabs };
