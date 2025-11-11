import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths"
import { Features } from "@/components/ui/features-1"
import { CTASection } from "@/components/ui/cta-section"
import { CTASectionAlt } from "@/components/ui/cta-section-alt"
import { SimpleHeader } from "@/components/ui/simple-header"
import { HowItWorks } from "@/components/ui/how-it-works"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { FeatureTabs } from "@/components/ui/feature-tabs"
import { FeatureCards } from "@/components/ui/feature-cards"
import { FAQSection } from "@/components/ui/faq-section"
import Footer from "@/components/ui/footer"

function Home() {
  return (
    <>
      <SimpleHeader />
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

export default Home
