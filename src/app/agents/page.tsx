import { Metadata } from 'next'
import EnhancedBackgroundPathsAgents from "@/components/ui/modern-background-paths-agents"
import { ThoroughSectionAgents } from "@/components/ui/thorough-section-agents"
import { FridayNightSectionAgents } from "@/components/ui/friday-night-section-agents"
import { HowItWorksAgents } from "@/components/ui/how-it-works-agents"
import { AgentNeverMissesSection } from "@/components/ui/agent-never-misses-section"
import { BeforeAfterSectionAgents } from "@/components/ui/before-after-section-agents"
import { FinalCTASectionAgents } from "@/components/ui/final-cta-section-agents"
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
      <ThoroughSectionAgents />
      <FridayNightSectionAgents />
      <HowItWorksAgents />
      <AgentNeverMissesSection />
      <BeforeAfterSectionAgents />
      <FinalCTASectionAgents />
      <Footer />
    </>
  )
}

