import { Metadata } from 'next'
import { BrokerageHero } from "@/components/ui/brokerage-hero"
import { BrokerageSteps } from "@/components/ui/brokerage-steps"
import { BrokerageTransformation } from "@/components/ui/brokerage-transformation"
import { BrokerageCTA } from "@/components/ui/brokerage-cta"
import { FAQSection } from "@/components/ui/faq-section"
import Footer from "@/components/ui/footer"

export const metadata: Metadata = {
  title: 'For Brokerages - Complete Transaction Oversight with AI',
  description: 'AI trained on YOUR forms, YOUR deadlines, YOUR standards. Complete oversight of every transaction across your entire team. Integrates with SkySlope & LoneWolf.',
  keywords: [
    'brokerage transaction management',
    'real estate brokerage AI',
    'agent oversight software',
    'transaction compliance',
    'E&O risk reduction',
    'SkySlope integration',
    'LoneWolf integration',
    'brokerage document review',
  ],
  openGraph: {
    title: 'Contre AI for Brokerages - Every Transaction. Every Agent. Complete Oversight.',
    description: 'AI trained on your standards. Zero agent friction. Complete brokerage oversight.',
  },
}

export default function BrokeragesPage() {
  return (
    <main id="main-content">
      <BrokerageHero />
      <BrokerageSteps />
      <BrokerageTransformation />
      <BrokerageCTA />
      <FAQSection />
      <Footer />
    </main>
  )
}
