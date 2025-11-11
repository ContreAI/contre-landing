import { Metadata } from 'next'
import { PolicyPageLayout } from "@/components/ui/policy-page-layout"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, Users, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: 'About Contre - Founded by Real Estate Veteran Cory Turnbull',
  description: 'After 10 years in commercial real estate and tens of millions in transactions, founder Cory Turnbull built Contre to solve the contract oversight crisis.',
  keywords: [
    'about contre',
    'cory turnbull',
    'real estate founder',
    'contract intelligence',
    'real estate technology',
  ],
  openGraph: {
    title: 'About Contre AI - Our Mission to Protect Real Estate Transactions',
    description: 'Founded by a 10-year real estate veteran to solve the contract oversight crisis.',
  },
}

export default function AboutPage() {
  return (
    <PolicyPageLayout title="About Contre">
      <section className="space-y-8">
        {/* Personal Introduction */}
        <div className="bg-[#264E36]/5 p-8 rounded-lg">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            After 10 years in commercial real estate and tens of millions in transactions, I've witnessed the devastating impact of a single overlooked detail. I'm <strong>Cory Turnbull</strong>, founder of Contre, and I built this platform because I've lived through the nightmare of contract oversights—both as an agent and as a brokerage owner.
          </p>
        </div>

        {/* The Problem */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4 flex items-center">
            <AlertTriangle className="mr-3 text-[#607D3B]" size={28} />
            The Problem I Couldn't Ignore
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              As a brokerage owner, I've seen experienced agents miss critical clauses that cost tens of thousands of dollars. I've watched trust evaporate between agents and clients over preventable errors. I've witnessed careers derailed by a single oversight buried on page 87 of an inspection report.
            </p>
            <p className="font-semibold text-[#264E36]">
              The truth is, one contractual mistake doesn't just cost money—it destroys reputations, relationships, and sometimes entire businesses. The damage ripples far beyond the failed transaction.
            </p>
            <p>
              After countless conversations with fellow brokers about their operational nightmares, one thing became crystal clear: we all faced the same problems. Oversight was nearly impossible to maintain across every transaction. Agents—both new and seasoned—were drowning in documents they didn't have time or expertise to fully analyze. Title reports, inspection documents, HOA bylaws, contracts, addendums—it's simply too much for any human to thoroughly review while maintaining the pace modern real estate demands.
            </p>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-[#607D3B]/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            The Solution: Contre
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            I didn't want to build another real estate tool. I wanted to solve the core problem that keeps brokers up at night: <strong>How do you protect every transaction while empowering your agents to work independently?</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Contre specializes in comprehensive contract and transaction analysis. We use dual AI technology to:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#607D3B] mr-3 text-xl">•</span>
              <span>Identify potential issues that agents, TCs, and even brokers might overlook</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#607D3B] mr-3 text-xl">•</span>
              <span>Cross-reference documents to catch mismatches and conflicts between contracts, title reports, and other documents</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#607D3B] mr-3 text-xl">•</span>
              <span>Analyze every page of inspection reports, HOA documents, and disclosures—the documents agents rarely have time to read thoroughly</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#607D3B] mr-3 text-xl">•</span>
              <span>Create shareable intelligence through our transaction chatbot, giving clients and team members instant answers about any document detail</span>
            </li>
          </ul>
        </div>

        {/* Why Different */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            Why Contre Is Different
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This isn't a generic document tool adapted for real estate. Every feature was built specifically for the unique challenges of real estate transactions:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* For Brokerages */}
            <div className="border-l-4 border-[#264E36] bg-[#264E36]/5 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-[#264E36] mb-4 flex items-center">
                <Shield size={24} className="mr-2" />
                For Brokerages
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Protect your business from costly oversights</li>
                <li>• Provide enterprise-level tools to every agent</li>
                <li>• Reduce E&O claims and liability exposure</li>
                <li>• Maintain oversight without becoming a bottleneck</li>
              </ul>
            </div>

            {/* For Agents */}
            <div className="border-l-4 border-[#607D3B] bg-[#607D3B]/5 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-[#264E36] mb-4 flex items-center">
                <Users size={24} className="mr-2" />
                For Agents
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Review documents confidently, even at 10 PM on Sunday</li>
                <li>• Never miss critical details that could kill deals</li>
                <li>• Answer client questions instantly with our AI chatbot</li>
                <li>• Focus on relationships while Contre handles document analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#9DBFBF]">
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            Our Approach to Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your documents contain sensitive information. That's why we've built Contre with:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Bank-level encryption</strong> for all documents</li>
            <li>• <strong>Enterprise-grade compliance</strong> standards</li>
            <li>• <strong>No document storage</strong>—we analyze and delete</li>
            <li>• <strong>Complete confidentiality</strong> for every transaction</li>
          </ul>
        </div>

        {/* Impact */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4 flex items-center">
            <TrendingUp className="mr-3 text-[#607D3B]" size={28} />
            The Impact We're Making
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every day, real estate professionals lose deals, damage relationships, and face liability because of document oversights. We're changing that. With Contre, brokerages can operate with confidence, agents can work independently, and clients get the thorough, transparent service they deserve.
          </p>
        </div>

        {/* Join Us */}
        <div className="bg-gradient-to-br from-[#264E36]/10 via-[#607D3B]/10 to-[#9DBFBF]/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            Join Us in Revolutionizing Real Estate
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I've spent a decade watching our industry struggle with the same preventable problems. Contre is my commitment to solving them. Whether you're a broker protecting your business, an agent building your reputation, or a transaction coordinator managing multiple deals, we built Contre for you.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold text-lg">
            Because I know firsthand: one missed detail can change everything. And you deserve better than hoping nothing gets overlooked.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center py-8 space-y-6">
          <h2 className="text-3xl font-bold font-['Bebas_Neue'] text-[#264E36]">
            Ready to Protect Every Transaction?
          </h2>
          <p className="text-lg text-gray-700">
            Experience the peace of mind that comes from knowing every document has been thoroughly analyzed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] hover:from-[#1a3624] hover:via-[#4a5f2d] hover:to-[#7da3a3] font-['Manrope'] text-lg px-8 py-6">
              Start Your Free Trial
            </Button>
            <Button variant="outline" className="font-['Manrope'] text-lg px-8 py-6">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-gray-700 mt-6">
            <strong>Questions?</strong> Contact me directly at{" "}
            <a href="mailto:ct@contre.ai" className="text-[#3ca2fa] hover:underline font-semibold">
              ct@contre.ai
            </a>
          </p>
        </div>
      </section>
    </PolicyPageLayout>
  )
}

