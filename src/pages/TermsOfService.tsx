import { PolicyPageLayout } from "@/components/ui/policy-page-layout"
import { CheckCircle } from "lucide-react"

function TermsOfService() {
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

        {/* 3. Description of Service */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            3. Description of Service
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">3.1 Core Services</h3>
              <p className="text-gray-700 mb-2">Contract Intelligence Platform provides:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>AI-powered analysis of real estate documents</li>
                <li>Extraction of critical dates, terms, and obligations</li>
                <li>Transaction timeline management</li>
                <li>Document storage and organization</li>
                <li>Automated alerts and reminders</li>
                <li>Chat interface for document queries</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
              <h3 className="text-xl font-bold text-amber-900 mb-3">3.2 Important Disclaimers</h3>
              <ul className="space-y-2 text-amber-900">
                <li>• Our Service provides information and analysis, NOT legal advice</li>
                <li>• AI analysis may contain errors and should be verified</li>
                <li>• We are not a law firm or substitute for legal counsel</li>
                <li>• You remain responsible for all business decisions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Acceptable Use Policy */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            4. Acceptable Use Policy
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">4.1 Prohibited Uses</h3>
              <p className="text-gray-700 mb-2">You may NOT use our Service to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Violate any laws or regulations</li>
                <li>Upload malicious code or interfere with the Service</li>
                <li>Attempt to gain unauthorized access to any systems</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Scrape or copy content without permission</li>
                <li>Misrepresent your identity or affiliation</li>
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">4.2 Content Standards</h3>
              <p className="text-gray-700 mb-2">All content you upload must:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Be legally obtained and authorized for use</li>
                <li>Not infringe on any intellectual property rights</li>
                <li>Not contain sensitive personal information beyond transaction needs</li>
                <li>Comply with all applicable privacy laws</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5. Pricing and Payment */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            5. Pricing and Payment
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">5.1 Billing Terms</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Automatic renewal unless cancelled</li>
                <li>Payment due at start of billing period</li>
                <li>No refunds for partial periods</li>
                <li>Late payments may result in suspension</li>
                <li>All fees exclusive of taxes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6. Intellectual Property Rights */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            6. Intellectual Property Rights
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">6.1 Your Content</h3>
              <p className="text-gray-700 mb-2">You retain all rights to the documents and content you upload. By using our Service, you grant us a limited license to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Process and analyze your documents</li>
                <li>Store and display content back to you</li>
                <li>Create anonymized insights for service improvement</li>
                <li>Provide our Services as described</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">6.2 Our Intellectual Property</h3>
              <p className="text-gray-700 mb-3">
                The Service, including its original content, features, and functionality, is owned by Contract Intelligence Platform, Inc. and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-700">
                Our trademarks and trade dress may not be used without our prior written consent.
              </p>
            </div>
          </div>
        </div>

        {/* 7. Limitation of Liability */}
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            7. Limitation of Liability
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">7.1 Disclaimer of Warranties</h3>
              <p className="text-gray-700 uppercase text-sm">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">7.2 Limitation of Damages</h3>
              <p className="text-gray-700 uppercase text-sm mb-3">
                IN NO EVENT SHALL CONTRACT INTELLIGENCE PLATFORM BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-gray-700">
                Our total liability shall not exceed the amount paid by you in the twelve (12) months preceding the claim.
              </p>
            </div>
          </div>
        </div>

        {/* 8. Indemnification */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            8. Indemnification
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to defend, indemnify, and hold harmless Contract Intelligence Platform, Inc., its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.
          </p>
        </div>

        {/* 9. Termination */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            9. Termination
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">9.1 Termination by You</h3>
              <p className="text-gray-700">
                You may terminate your account at any time through the account settings or by contacting support. Termination takes effect at the end of your current billing period.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">9.2 Termination by Us</h3>
              <p className="text-gray-700 mb-2">We may terminate or suspend your account immediately, without prior notice, if:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>You breach these Terms</li>
                <li>You fail to pay fees when due</li>
                <li>We suspect fraudulent or illegal activity</li>
                <li>Required by law enforcement or court order</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">9.3 Effect of Termination</h3>
              <p className="text-gray-700">
                Upon termination, your right to access and use the Service ceases immediately. You may download your data for 30 days after termination. After this period, we may delete your account and data.
              </p>
            </div>
          </div>
        </div>

        {/* 10. Governing Law and Dispute Resolution */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            10. Governing Law and Dispute Resolution
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">10.1 Governing Law</h3>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of the State of Idaho, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">10.2 Arbitration Agreement</h3>
              <p className="text-gray-700 mb-3">
                Any dispute arising from these Terms shall be resolved through binding arbitration under the rules of the American Arbitration Association. The arbitration shall be conducted in Ada County, Idaho.
              </p>
              <p className="text-gray-700 font-semibold">
                Class Action Waiver: You agree to resolve disputes on an individual basis and waive any right to participate in class actions.
              </p>
            </div>
          </div>
        </div>

        {/* 11. Modifications to Terms */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            11. Modifications to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms at any time. We will provide notice of material changes through email or in-app notification at least 30 days before they take effect. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
          </p>
        </div>

        {/* 12. Contact Information */}
        <div className="bg-[#264E36]/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            12. Contact Information
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

export default TermsOfService
