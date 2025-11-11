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

function Agents() {
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

export default Agents
