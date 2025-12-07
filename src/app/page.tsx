import { Metadata } from 'next'
import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths"
import { StatsBanner } from "@/components/ui/stats-banner"
import { DocumentTable } from "@/components/ui/document-table"
import { FridayNightSection } from "@/components/ui/friday-night-section"
import { CTASectionAlt } from "@/components/ui/cta-section-alt"
import { HowItWorks } from "@/components/ui/how-it-works"
import { FeatureTabs } from "@/components/ui/feature-tabs"
import { FeatureCards } from "@/components/ui/feature-cards"
import { FeatureCardsAgents } from "@/components/ui/feature-cards-agents"
import { FAQSection } from "@/components/ui/faq-section"
import { CTAFinal } from "@/components/ui/cta-final"
import Footer from "@/components/ui/footer"
import { OrganizationSchema, WebsiteSchema, SoftwareApplicationSchema } from "@/components/seo/StructuredData"

export const metadata: Metadata = {
  title: 'Contre AI - AI That Protects Your Deals, Clients, and Commission',
  description: 'Comprehensive AI-powered contract analysis for real estate agents and brokerages. Never miss critical details. Protect every transaction with dual AI technology.',
  keywords: [
    'real estate AI',
    'contract analysis',
    'transaction protection',
    'real estate agents',
    'brokerage software',
    'document review',
    'HOA analysis',
    'inspection reports',
    'contract intelligence',
  ],
  openGraph: {
    title: 'Contre AI - AI That Protects Your Deals, Clients, and Commission',
    description: 'Comprehensive AI-powered contract analysis for real estate professionals.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <SoftwareApplicationSchema />
      <EnhancedBackgroundPaths title="Catch Every Detail. Track Every Deadline. 60 Seconds." />
      <StatsBanner />
      <DocumentTable />
      <FridayNightSection />
      <HowItWorks />
      <CTASectionAlt />
      <FeatureTabs />
      <FeatureCards />
      <FeatureCardsAgents />
      <FAQSection />
      <CTAFinal />
      <Footer />
    </>
  )
}
