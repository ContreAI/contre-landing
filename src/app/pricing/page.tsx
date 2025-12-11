import { Metadata } from 'next'
import { PricingHero } from "@/components/ui/pricing-hero"
import { AgentPricingSection } from "@/components/ui/agent-pricing-section"
import { EnterprisePricingSection } from "@/components/ui/enterprise-pricing-section"
import { PricingFAQSection } from "@/components/ui/pricing-faq-section"
import Footer from "@/components/ui/footer"

export const metadata: Metadata = {
  title: 'Pricing - Simple, Transparent Plans for Agents & Brokerages',
  description: 'Choose the plan that fits your needs. Individual agent subscriptions starting at $34.99/month or volume-based brokerage pricing starting at $30/transaction.',
  keywords: [
    'real estate software pricing',
    'contract review pricing',
    'brokerage software cost',
    'agent subscription',
    'transaction management pricing',
    'real estate AI pricing',
  ],
  openGraph: {
    title: 'Contre AI Pricing - Plans for Every Team Size',
    description: 'Simple, transparent pricing for individual agents and brokerages.',
  },
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <AgentPricingSection />
      <EnterprisePricingSection />
      <PricingFAQSection />
      <Footer />
    </>
  )
}
