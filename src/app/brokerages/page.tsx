import { Metadata } from 'next'
import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths"
import { StatsBanner } from "@/components/ui/stats-banner"
import { IntegrationBanner } from "@/components/ui/integration-banner"
import { FeaturesBrokerages } from "@/components/ui/features-brokerages"
import { CTASectionBrokerages } from "@/components/ui/cta-section-brokerages"
import { CTASectionAltBrokerages } from "@/components/ui/cta-section-alt-brokerages"
import { HowItWorksBrokerages } from "@/components/ui/how-it-works-brokerages"
import { FeaturesSectionWithHoverEffectsBrokerages } from "@/components/ui/feature-section-with-hover-effects-brokerages"
import { FeatureTabsBrokerages } from "@/components/ui/feature-tabs-brokerages"
import { FeatureCards } from "@/components/ui/feature-cards"
import { FAQSection } from "@/components/ui/faq-section"
import Footer from "@/components/ui/footer"

export const metadata: Metadata = {
  title: 'For Brokerages - Enterprise Real Estate Document Protection',
  description: 'Protect your business from costly oversights. Provide enterprise-level tools to every agent. Reduce E&O claims and liability exposure.',
  keywords: [
    'real estate brokerage software',
    'enterprise contract management',
    'brokerage risk management',
    'E&O protection',
    'compliance tools',
    'agent oversight',
  ],
  openGraph: {
    title: 'Contre AI for Brokerages - Protect Every Transaction',
    description: 'Enterprise-grade AI document protection for real estate brokerages.',
  },
}

export default function BrokeragesPage() {
  return (
    <>
      <EnhancedBackgroundPaths title="Even the Best Agents Miss Things in the Paperwork" />
      <StatsBanner
        stat="32% of buyers feel the paperwork is overwhelming during the home purchase process"
        source="— Nasdaq"
      />
      <IntegrationBanner />
      <FeaturesBrokerages />
      <CTASectionBrokerages />
      <StatsBanner
        stat="59% of Realtors have seen transactions delayed or stalled due to poor document management"
        source="— Adobe, 2024"
      />
      <HowItWorksBrokerages />
      <FeaturesSectionWithHoverEffectsBrokerages />
      <CTASectionAltBrokerages />
      <FeatureTabsBrokerages />
      <FeatureCards />
      <FAQSection />
      <Footer />
    </>
  )
}
