import { Metadata } from 'next'
import { HeroSection } from "@/components/ui/hero-section"
import { StatsBanner } from "@/components/ui/stats-banner"
import { DocumentTable } from "@/components/ui/document-table"
import { FridayNightSection } from "@/components/ui/friday-night-section"
import { CTASectionAlt } from "@/components/ui/cta-section-alt"
import { HowItWorks } from "@/components/ui/how-it-works"
import { FeatureTabs } from "@/components/ui/feature-tabs"
import { FeatureCardsCombined } from "@/components/ui/feature-cards-combined"
import { VideoDemo } from "@/components/ui/video-demo"
import { FAQSection } from "@/components/ui/faq-section"
import { CTAFinal } from "@/components/ui/cta-final"
import Footer from "@/components/ui/footer"
import { IntegrationPartners } from "@/components/ui/integration-partners"
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
    <main id="main-content">
      <OrganizationSchema />
      <WebsiteSchema />
      <SoftwareApplicationSchema />
      <HeroSection />
      <IntegrationPartners />
      <StatsBanner />
      <DocumentTable />
      <FridayNightSection />
      <HowItWorks />
      <VideoDemo />
      <CTASectionAlt />
      <FeatureTabs />
      <FeatureCardsCombined />
      <FAQSection />
      <CTAFinal />
      <Footer />
    </main>
  )
}
