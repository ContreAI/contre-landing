import { Metadata } from 'next'
import EnhancedBackgroundPathsBrokerages from "@/components/ui/modern-background-paths-brokerages"
import { HowItWorksBrokerages } from "@/components/ui/how-it-works-brokerages"
import { FAQSection } from "@/components/ui/faq-section"
import { StakesSectionBrokerages } from "@/components/ui/stakes-section-brokerages"
import { SolutionSectionBrokerages } from "@/components/ui/solution-section-brokerages"
import { EmpathySectionBrokerages } from "@/components/ui/empathy-section-brokerages"
import { HowContreWorksBrokerages } from "@/components/ui/how-contre-works-brokerages"
import { AssessmentCTABrokerages } from "@/components/ui/assessment-cta-brokerages"
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
      <EnhancedBackgroundPathsBrokerages />
      <StakesSectionBrokerages />
      <SolutionSectionBrokerages />
      <EmpathySectionBrokerages />
      <HowItWorksBrokerages />
      <HowContreWorksBrokerages />
      <AssessmentCTABrokerages />
      <FAQSection />
      <Footer />
    </>
  )
}
