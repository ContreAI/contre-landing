import { Metadata } from 'next'
import EnhancedBackgroundPathsAgents from "@/components/ui/modern-background-paths-agents"
import { StatsBannerSimple } from "@/components/ui/stats-banner-simple"
import { FeaturesAgents } from "@/components/ui/features-agents"
import { CTASectionAgents } from "@/components/ui/cta-section-agents"
import { CTASectionAltAgents } from "@/components/ui/cta-section-alt-agents"
import { HowItWorksAgents } from "@/components/ui/how-it-works-agents"
import { FeaturesSectionWithHoverEffectsAgents } from "@/components/ui/feature-section-with-hover-effects-agents"
import { FeatureTabsAgents } from "@/components/ui/feature-tabs-agents"
import { FeatureCardsAgents } from "@/components/ui/feature-cards-agents"
import { FAQSectionAgents } from "@/components/ui/faq-section-agents"
import Footer from "@/components/ui/footer"

export const metadata: Metadata = {
  title: 'For Agents - AI-Powered Contract Protection',
  description: 'Review documents confidently, even at 10 PM on Sunday. Never miss critical details that could kill deals. Answer client questions instantly with AI chatbot.',
  keywords: [
    'real estate agents',
    'contract review for agents',
    'AI for realtors',
    'transaction tools',
    'document analysis',
    'agent productivity',
  ],
  openGraph: {
    title: 'Contre AI for Agents - Never Miss a Critical Detail',
    description: 'AI-powered document protection for real estate agents.',
  },
}

export default function AgentsPage() {
  return (
    <>
      <EnhancedBackgroundPathsAgents />
      <StatsBannerSimple
        stat="32% of buyers feel the paperwork is overwhelming during the home purchase process"
        source="— Nasdaq"
        variant="seaglass"
      />
      <FeaturesAgents />
      <CTASectionAgents />
      <StatsBannerSimple
        stat="59% of Realtors have seen transactions delayed or stalled due to poor document management"
        source="— Adobe, 2024"
        variant="seaglass"
      />
      <HowItWorksAgents />
      <FeaturesSectionWithHoverEffectsAgents />
      <CTASectionAltAgents />
      <FeatureTabsAgents />
      <FeatureCardsAgents />
      <FAQSectionAgents />
      <Footer />
    </>
  )
}

