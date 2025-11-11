import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths"
import { IntegrationBanner } from "@/components/ui/integration-banner"
import { FeaturesBrokerages } from "@/components/ui/features-brokerages"
import { CTASectionBrokerages } from "@/components/ui/cta-section-brokerages"
import { CTASectionAltBrokerages } from "@/components/ui/cta-section-alt-brokerages"
import { SimpleHeader } from "@/components/ui/simple-header"
import { HowItWorksBrokerages } from "@/components/ui/how-it-works-brokerages"
import { FeaturesSectionWithHoverEffectsBrokerages } from "@/components/ui/feature-section-with-hover-effects-brokerages"
import { FeatureTabsBrokerages } from "@/components/ui/feature-tabs-brokerages"
import { FeatureCards } from "@/components/ui/feature-cards"
import { FAQSection } from "@/components/ui/faq-section"
import Footer from "@/components/ui/footer"

function Brokerages() {
  return (
    <>
      <SimpleHeader />
      <EnhancedBackgroundPaths title="Your Agents Are Skimming 200-Page HOA Packets. What Could Go Wrong?" />
      <IntegrationBanner />
      <FeaturesBrokerages />
      <CTASectionBrokerages />
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

export default Brokerages
