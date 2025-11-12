import { Metadata } from 'next'
import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths"
import { Features } from "@/components/ui/features-1"
import { CTASection } from "@/components/ui/cta-section"
import { CTASectionAlt } from "@/components/ui/cta-section-alt"
import { HowItWorks } from "@/components/ui/how-it-works"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { FeatureTabs } from "@/components/ui/feature-tabs"
import { FeatureCards } from "@/components/ui/feature-cards"
import { FAQSection } from "@/components/ui/faq-section"
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
      <EnhancedBackgroundPaths title="AI That Protects Your Deals, Your Clients, and Your Commission" />
      <Features />
      <CTASection />
      <HowItWorks />
      <FeaturesSectionWithHoverEffects />
      <CTASectionAlt />
      <FeatureTabs />
      <FeatureCards />
      <FAQSection />
      <Footer />
    </>
  )
}
