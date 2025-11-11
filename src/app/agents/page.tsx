import { Metadata } from 'next'
import EnhancedBackgroundPathsAgents from "@/components/ui/modern-background-paths-agents"
import { FeaturesAgents } from "@/components/ui/features-agents"
import { CTASectionAgents } from "@/components/ui/cta-section-agents"
import { CTASectionAltAgents } from "@/components/ui/cta-section-alt-agents"
import { SimpleHeader } from "@/components/ui/simple-header"
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
      <SimpleHeader />
      <EnhancedBackgroundPathsAgents />
      <FeaturesAgents />
      <CTASectionAgents />
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

