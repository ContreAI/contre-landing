import { Metadata } from 'next'
import { PolicyPageLayout } from "@/components/ui/policy-page-layout"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: 'Terms of Service - Clear Terms for Trusted Partnership',
  description: 'Read our Terms of Service to understand your rights and responsibilities when using Contre AI platform.',
  keywords: ['terms of service', 'user agreement', 'terms and conditions'],
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <PolicyPageLayout title="Terms of Service" lastUpdated="January 15, 2024">
      <section className="space-y-8">
        {/* Hero Statement */}
        <div className="text-center py-8">
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Clear terms for a trusted partnership
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Effective: January 15, 2024
          </p>
        </div>

        {/* Agreement Summary */}
        <div className="bg-[#264E36]/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-6">
            Agreement Summary
          </h2>
          <p className="text-gray-700 mb-4">By using Contract Intelligence Platform ("Service"), you agree to these Terms. Key points:</p>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-[#607D3B] mt-0.5 flex-shrink-0" size={20} />
              <p className="text-gray-700">You must be 18+ and authorized to enter contracts</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-[#607D3B] mt-0.5 flex-shrink-0" size={20} />
              <p className="text-gray-700">You retain ownership of all your uploaded documents</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-[#607D3B] mt-0.5 flex-shrink-0" size={20} />
              <p className="text-gray-700">Our AI analysis is assistive, not legal advice</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-[#607D3B] mt-0.5 flex-shrink-0" size={20} />
              <p className="text-gray-700">Subscription fees are billed monthly or annually</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-[#607D3B] mt-0.5 flex-shrink-0" size={20} />
              <p className="text-gray-700">Either party can terminate with 30 days notice</p>
            </div>
          </div>
        </div>

        {/* 1. Acceptance of Terms */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing or using the Contract Intelligence Platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our Service.
          </p>
          <p className="text-gray-700 leading-relaxed">
            These Terms constitute a legally binding agreement between you (whether personally or on behalf of an entity) and Contract Intelligence Platform, Inc. regarding your use of our website, applications, and services.
          </p>
        </div>

        {/* 2. Eligibility and Account Registration */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            2. Eligibility and Account Registration
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">2.1 Eligibility Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>You must be at least 18 years old</li>
                <li>You must have the legal capacity to enter into contracts</li>
                <li>You must be a licensed real estate professional or authorized representative</li>
                <li>You must provide accurate and complete registration information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">2.2 Account Security</h3>
              <p className="text-gray-700 mb-2">You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information remains current and accurate</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rest of the sections... */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            3. Description of Service
          </h2>
          <p className="text-gray-700 mb-4">Contract Intelligence Platform provides AI-powered analysis of real estate documents including extraction of critical dates, terms, and obligations.</p>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Important Disclaimers</h3>
            <ul className="space-y-2 text-amber-900">
              <li>• Our Service provides information and analysis, NOT legal advice</li>
              <li>• AI analysis may contain errors and should be verified</li>
              <li>• We are not a law firm or substitute for legal counsel</li>
              <li>• You remain responsible for all business decisions</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-[#264E36]/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700">
            For questions about these Terms of Service:
          </p>
          <p className="text-gray-700 mt-3">
            <strong>Email:</strong> <a href="mailto:ct@contre.ai" className="text-[#3ca2fa] hover:underline">ct@contre.ai</a>
          </p>
        </div>
      </section>
    </PolicyPageLayout>
  )
}

