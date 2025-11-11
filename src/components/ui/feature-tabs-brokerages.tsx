"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, History, GraduationCap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  bulletPoints?: string[];
  noMoreList?: string[];
  perfectForList?: string[];
  resultText?: string;
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

interface FeatureTabsBrokeragesProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const FeatureTabsBrokerages = ({
  badge = "How Contre Works",
  heading = "Your Brokerage's Entire Knowledge Base—Available to Every Agent, 24/7",
  description = "Upload your company docs, state regulations, MLS rules, and transaction history once. Your agents get instant answers to any question without calling you at 10pm or guessing at policy.",
  tabs = [
    {
      value: "tab-1",
      icon: <BookOpen className="h-auto w-4 shrink-0" />,
      label: "Institutional Knowledge Hub",
      content: {
        badge: "Institutional Knowledge Hub",
        title: "New Agents Perform Like Veterans. Veterans Never Second-Guess.",
        description:
          "Train our AI on your brokerage's complete knowledge base:",
        bulletPoints: [
          "Company policies, procedures, and best practices",
          "State-specific real estate regulations and disclosure requirements",
          "MLS rules and guidelines for your market",
          "Transaction coordinator workflows and checklists",
        ],
        noMoreList: [
          "Agents calling you after hours asking basic policy questions",
          "Inconsistent answers from different team members",
          "New agents guessing at procedures because they can't find the manual",
          "Veterans operating on outdated information from 5 years ago",
        ],
        buttonText: "See the Knowledge Hub Demo",
        imageSrc:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        imageAlt: "Knowledge base interface showing company policies and procedures",
      },
    },
    {
      value: "tab-2",
      icon: <History className="h-auto w-4 shrink-0" />,
      label: "Transaction Memory & Recall",
      content: {
        badge: "Transaction Memory & Recall",
        title: "Every Transaction Your Agents Ever Handled—Instantly Searchable",
        description:
          "Once a transaction is uploaded, it lives in your agent's account forever. Need to reference something from 6 months ago?\n\nAsk the chatbot:",
        bulletPoints: [
          '"What was the earnest money amount on the Johnson deal?"',
          '"Show me all transactions where the seller provided a credit"',
          '"What HOA restrictions came up on my Meridian listings?"',
          '"Find the inspection contingency language from my last successful negotiation"',
        ],
        perfectForList: [
          "Finding precedents for client negotiations",
          "Recalling specific terms from past contracts",
          "Training on what's worked before in similar situations",
          "Building consistency across an agent's entire portfolio",
        ],
        buttonText: "See Transaction Recall in Action",
        imageSrc:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        imageAlt: "Transaction search interface showing past deals",
      },
    },
    {
      value: "tab-3",
      icon: <GraduationCap className="h-auto w-4 shrink-0" />,
      label: "On-Demand Training & Form Guidance",
      content: {
        badge: "On-Demand Training & Form Guidance",
        title: "Stop Spending Weekends Teaching Forms Your Agents Will Forget By Monday",
        description:
          "You invest hours every year updating agents on new forms, revised disclosures, and regulatory changes. Two weeks later, they're texting you: \"Which disclosure do I need for a well?\" or \"Wait, what's the difference between the feasibility period and due diligence?\"\n\nTrain the AI once. Every agent gets perfect recall, forever.\n\nUpload your forms library, disclosure requirements, and training materials. Agents ask practical questions in real-time:",
        bulletPoints: [
          '"What documents do I need for a standard residential purchase?" → Gets the complete checklist specific to your brokerage and state',
          '"What\'s the TRID 17 disclosure actually for?" → Gets plain-English explanation of purpose, when to use it, and what happens if they miss it',
          '"My buyer is getting a well inspection. What disclosures do I need?" → Gets the specific forms required, deadlines to watch, and common pitfalls',
          '"Can my client waive the appraisal contingency?" → Gets explanation of risks, required disclosures, and your brokerage\'s policy',
        ],
        resultText: "Your training investment compounds instead of evaporating the moment agents walk out of the conference room.",
        noMoreList: [
          'Agents "winging it" because they can\'t remember the training',
          "Weekend form workshops that don't stick",
          "Inconsistent answers from different agents",
          "You explaining the same disclosure requirement for the 47th time",
        ],
        buttonText: "See Form Training Demo",
        imageSrc:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        imageAlt: "Form training interface showing disclosure requirements",
      },
    },
  ],
}: FeatureTabsBrokeragesProps) => {
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
          <h2 className="max-w-4xl text-5xl md:text-7xl font-semibold font-['Bebas_Neue'] text-[#37474F]">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-['Manrope'] max-w-3xl">{description}</p>
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
                  <p className="text-slate-600 lg:text-lg font-['Manrope'] whitespace-pre-line">
                    {tab.content.description}
                  </p>

                  {/* Bullet points */}
                  {tab.content.bulletPoints && (
                    <ul className="space-y-2 mt-2">
                      {tab.content.bulletPoints.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-600 font-['Manrope']">
                          <span className="text-[#607D3B] mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Additional paragraph for tab 1 */}
                  {tab.value === "tab-1" && (
                    <p className="text-slate-600 lg:text-lg font-['Manrope'] mt-2">
                      Your agents ask questions in plain English—"What's our policy on dual agency?" or "Does Idaho require radon disclosure?"—and get instant, accurate answers based on YOUR brokerage's actual documents and standards.
                    </p>
                  )}

                  {/* Additional paragraph for tab 2 */}
                  {tab.value === "tab-2" && (
                    <p className="text-slate-600 lg:text-lg font-['Manrope'] mt-2">
                      Your agents build their own searchable knowledge base with every closed transaction. Past deals become reference material for future negotiations.
                    </p>
                  )}

                  {/* No more list */}
                  {tab.content.noMoreList && (
                    <div className="mt-4">
                      <p className="text-slate-700 font-semibold font-['Manrope'] mb-2">
                        {tab.value === "tab-3" ? "The result:" : "No more:"}
                      </p>
                      <ul className="space-y-2">
                        {tab.content.noMoreList.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-slate-600 font-['Manrope']">
                            <span className="text-red-500 mt-1">✗</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Perfect for list */}
                  {tab.content.perfectForList && (
                    <div className="mt-4">
                      <p className="text-slate-700 font-semibold font-['Manrope'] mb-2">Perfect for:</p>
                      <ul className="space-y-2">
                        {tab.content.perfectForList.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-slate-600 font-['Manrope']">
                            <span className="text-[#607D3B] mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Result text */}
                  {tab.content.resultText && (
                    <p className="text-slate-700 font-['Manrope'] italic mt-4 border-l-4 border-[#607D3B] pl-4">
                      {tab.content.resultText}
                    </p>
                  )}

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

export { FeatureTabsBrokerages };
