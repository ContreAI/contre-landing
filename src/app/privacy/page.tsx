import { Metadata } from 'next'
import { PolicyPageLayout } from "@/components/ui/policy-page-layout"
import { Shield, Lock, Eye, FileCheck } from "lucide-react"

export const metadata: Metadata = {
  title: 'Privacy Policy - Your Data Security is Our Priority',
  description: 'Learn how Contre AI protects your privacy with bank-level encryption, GDPR compliance, and transparent data practices.',
  keywords: ['privacy policy', 'data security', 'GDPR', 'CCPA', 'document encryption'],
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageLayout title="Privacy Policy" lastUpdated="January 15, 2024">
      <section className="space-y-8">
        {/* Hero Statement */}
        <div className="text-center py-8">
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Your privacy is fundamental to our mission
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Effective: January 15, 2024
          </p>
        </div>

        {/* Privacy at a Glance */}
        <div className="bg-[#264E36]/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-6">
            Privacy at a Glance
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <Shield className="text-[#607D3B] mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">We never sell your personal data to third parties</p>
            </div>
            <div className="flex items-start space-x-3">
              <Lock className="text-[#607D3B] mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">Your documents are encrypted at rest and in transit</p>
            </div>
            <div className="flex items-start space-x-3">
              <Eye className="text-[#607D3B] mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">You can request data deletion at any time</p>
            </div>
            <div className="flex items-start space-x-3">
              <FileCheck className="text-[#607D3B] mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">We comply with GDPR, CCPA, and other privacy regulations</p>
            </div>
          </div>
        </div>

        {/* Information We Collect */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-6">
            Information We Collect
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">Information You Provide</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Account Information:</strong> Name, email address, brokerage affiliation</li>
                <li><strong>Transaction Data:</strong> Property addresses, client names, transaction dates, contract details</li>
                <li><strong>Documents:</strong> Real estate contracts, addendums, disclosures uploaded for analysis</li>
                <li><strong>Communications:</strong> Support tickets, chat messages, feedback</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">Information Collected Automatically</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Usage Data:</strong> Features used, documents processed, time spent on platform</li>
                <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
                <li><strong>Cookies:</strong> Session cookies, preference cookies (see our Cookie Policy)</li>
                <li><strong>Analytics:</strong> Page views, click patterns, feature adoption</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-6">
            How We Use Your Information
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">Primary Uses</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Process and analyze your real estate documents</li>
                <li>Extract critical dates, terms, and obligations</li>
                <li>Provide AI-powered insights and recommendations</li>
                <li>Send transaction alerts and deadline reminders</li>
                <li>Maintain and improve our services</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="text-xl font-bold text-red-900 mb-3">We Do NOT Use Your Information To</h3>
              <ul className="list-disc list-inside space-y-2 text-red-900 ml-4">
                <li>Sell or rent your personal data</li>
                <li>Share transaction details with competitors</li>
                <li>Use your documents to train AI models without consent</li>
                <li>Send unrelated marketing communications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-6">
            Data Security
          </h2>

          <div>
            <h3 className="text-xl font-bold text-[#264E36] mb-4">Enterprise-Grade Security Measures</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Encryption:</strong> AES-256 encryption at rest, TLS 1.3 in transit</li>
              <li><strong>Access Controls:</strong> Role-based permissions, multi-factor authentication</li>
              <li><strong>Infrastructure:</strong> Enterprise-grade certified data centers</li>
              <li><strong>Monitoring:</strong> 24/7 security monitoring and intrusion detection</li>
              <li><strong>Compliance:</strong> Regular security audits and penetration testing</li>
            </ul>
          </div>
        </div>

        {/* Your Rights and Choices */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-6">
            Your Rights and Choices
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">You Have the Right To</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Export your data (portability)</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict processing of your data</li>
              </ul>
            </div>

            <div className="bg-[#607D3B]/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#264E36] mb-3">How to Exercise Your Rights</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Email:</strong> <a href="mailto:ct@contre.ai" className="text-[#3ca2fa] hover:underline">ct@contre.ai</a></li>
                <li><strong>In-app:</strong> Settings → Privacy</li>
                <li><strong>Response time:</strong> Within 30 days</li>
                <li><strong>No fee</strong> for first request</li>
                <li><strong>Identity verification required</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Information Sharing */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-6">
            Information Sharing
          </h2>

          <div>
            <h3 className="text-xl font-bold text-[#264E36] mb-3">We May Share Information With</h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li><strong>Service Providers:</strong> AWS for hosting, Stripe for payments (bound by confidentiality)</li>
              <li><strong>AI Providers:</strong> Anthropic (Claude) and OpenAI (GPT-4) for document analysis</li>
              <li><strong>Your Brokerage:</strong> If you're part of an enterprise account</li>
              <li><strong>Legal Compliance:</strong> When required by law or court order</li>
              <li><strong>Business Transfers:</strong> In case of merger or acquisition (with notice)</li>
            </ul>
            <div className="bg-[#264E36]/10 p-4 rounded border-l-4 border-[#264E36]">
              <p className="text-gray-700 font-medium">
                <strong>Important:</strong> We never sell, rent, or share your personal information for marketing purposes without explicit consent.
              </p>
            </div>
          </div>
        </div>

        {/* Data Retention */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-6">
            Data Retention
          </h2>
          <p className="text-gray-700 mb-4">
            We retain your information for as long as necessary to provide our services and comply with legal obligations:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Active Account Data:</strong> Retained while account is active</li>
            <li><strong>Closed Account Data:</strong> Deleted within 90 days of closure</li>
            <li><strong>Transaction Records:</strong> 7 years for legal compliance</li>
            <li><strong>Marketing Data:</strong> Until opt-out or 3 years of inactivity</li>
            <li><strong>Backup Data:</strong> Maximum 90 days in backup systems</li>
          </ul>
        </div>

        {/* Children's Privacy */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            Children's Privacy
          </h2>
          <p className="text-gray-700">
            Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately at{" "}
            <a href="mailto:ct@contre.ai" className="text-[#3ca2fa] hover:underline">ct@contre.ai</a>.
          </p>
        </div>

        {/* Contact Us */}
        <div className="bg-[#264E36]/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            If you have questions about this Privacy Policy or our privacy practices:
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> <a href="mailto:ct@contre.ai" className="text-[#3ca2fa] hover:underline">ct@contre.ai</a></p>
            <p><strong>Address:</strong> Contre<br />Coeur d'Alene, ID</p>
            <p><strong>Data Protection Officer:</strong> <a href="mailto:ct@contre.ai" className="text-[#3ca2fa] hover:underline">ct@contre.ai</a></p>
          </div>
        </div>

        {/* Changes to This Policy */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. For significant changes, we will provide additional notice through email or in-app notifications.
          </p>
        </div>
      </section>
    </PolicyPageLayout>
  )
}

