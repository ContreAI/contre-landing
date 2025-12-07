"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, FileText, ShieldAlert } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
      icon: <MessageCircle className="h-auto w-4 shrink-0" />,
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
      icon: <FileText className="h-auto w-4 shrink-0" />,
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
      icon: <ShieldAlert className="h-auto w-4 shrink-0" />,
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
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge
            variant="outline"
            className="font-['Manrope'] text-[#264E36] border-[#264E36]/20"
          >
            {badge}
          </Badge>
          <h2 className="max-w-2xl text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-[#37474F]">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-['Manrope']">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent h-auto p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold font-['Manrope'] text-slate-600 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#264E36]/10 data-[state=active]:to-[#607D3B]/10 data-[state=active]:text-[#264E36] transition-all duration-300"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-slate-50 p-6 lg:p-16 border border-slate-200">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge
                    variant="outline"
                    className="w-fit bg-white font-['Manrope'] text-[#264E36] border-[#264E36]/20"
                  >
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl font-['Bebas_Neue'] text-[#37474F]">
                    {tab.content.title}
                  </h3>
                  <p className="text-slate-600 lg:text-lg font-['Manrope']">
                    {tab.content.description}
                  </p>
                  <Button
                    size="lg"
                    className="mt-2.5 w-fit rounded-xl px-8 py-6 text-base font-semibold
                                bg-gradient-to-r from-[#264E36] to-[#607D3B] hover:from-[#1a3624] hover:to-[#4a5f2d]
                                text-white transition-all duration-300
                                hover:-translate-y-0.5 hover:shadow-xl
                                border-0 font-['Manrope']"
                  >
                    {tab.content.buttonText}
                  </Button>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
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
