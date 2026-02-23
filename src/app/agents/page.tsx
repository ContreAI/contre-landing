import { Metadata } from 'next'
import { AgentHero } from "@/components/ui/agent-hero"
import { AgentSteps } from "@/components/ui/agent-steps"
import { AgentTransformation } from "@/components/ui/agent-transformation"
import { AgentCTA } from "@/components/ui/agent-cta"
import { FAQSection } from "@/components/ui/faq-section"
import Footer from "@/components/ui/footer"

export const metadata: Metadata = {
  title: 'For Agents - AI-Powered Contract Protection',
  description: 'Upload your contract, get a complete analysis in 60 seconds. Every deadline, every red flag, every conflict — surfaced before it costs you. Share a 24/7 chatbot with your clients.',
  keywords: [
    'real estate agents',
    'contract review for agents',
    'AI for realtors',
    'transaction document analysis',
    'agent productivity tools',
    'real estate AI chatbot',
    'contract analysis',
    'deal protection',
  ],
  openGraph: {
    title: 'Contre AI for Agents - Every Detail. Every Deadline. Every Time.',
    description: 'Upload contracts, get instant analysis, share client chatbots. Never miss a critical detail again.',
  },
}

const agentFaqItems = [
  {
    id: "1",
    title: "How accurate is the AI? What if it misses something?",
    content:
      "Every document goes through multiple layers of AI analysis with independent verification at each stage. Contre flags potential issues for your professional review — think of it as an expert paralegal who reads every page and never gets tired. You always make the final call.",
  },
  {
    id: "2",
    title: "Do I need to change my current workflow?",
    content:
      "Not at all. Keep using SkySlope, DocuSign, or whatever tools you already use. You just upload documents to Contre (or connect your TMS for auto-sync) and get instant analysis. It's an add-on that makes you look better, not a replacement for anything.",
  },
  {
    id: "3",
    title: "Can my clients tell I'm using AI?",
    content:
      "Clients see branded reports and a professional chatbot interface. They just think you're the most organized, thorough agent they've ever worked with. Your name, your reputation — Contre works behind the scenes.",
  },
  {
    id: "4",
    title: "How long does setup take?",
    content:
      "About 2 minutes. Create an account, upload your first transaction documents, and you're ready to go. No training required, no technical setup — just upload and start getting answers.",
  },
  {
    id: "5",
    title: "What types of documents can Contre analyze?",
    content:
      "Purchase agreements, addendums, inspection reports, HOA documents, title work, disclosures, septic reports, environmental assessments — any document in your transaction. We support PDFs, scanned images, and multi-page documents.",
  },
  {
    id: "6",
    title: "How much time does this actually save per deal?",
    content:
      "Agents report saving 2-5 hours per deal on document review and client questions. The bigger win? Zero late-night texts because clients have 24/7 chatbot access, and the confidence of knowing nothing slipped through the cracks.",
  },
  {
    id: "7",
    title: "What if I work with different contract forms across different deals?",
    content:
      "No problem. Contre works with any real estate document — residential, commercial, different state forms, or custom contracts. Just upload whatever documents you have for each transaction and the AI adapts automatically.",
  },
  {
    id: "8",
    title: "What if my brokerage doesn't use Contre?",
    content:
      "Individual agents can sign up independently. If your brokerage adopts it later, your account seamlessly converts to the brokerage system with zero data loss.",
  },
]

export default function AgentsPage() {
  return (
    <main id="main-content">
      <AgentHero />
      <AgentSteps />
      <AgentTransformation />
      <AgentCTA />
      <FAQSection items={agentFaqItems} />
      <Footer />
    </main>
  )
}
