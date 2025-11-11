import { PolicyPageLayout } from "@/components/ui/policy-page-layout"
import { Mail, MapPin, Calendar, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does Contre work?",
      answer: "Contre uses advanced AI to analyze your real estate documents, identifying potential issues, extracting critical dates, and cross-referencing information across multiple documents. Simply upload your contracts, inspection reports, and other transaction documents, and our AI provides instant analysis and alerts."
    },
    {
      question: "What types of documents can Contre analyze?",
      answer: "Contre can analyze purchase agreements, inspection reports, title documents, HOA bylaws, disclosures, addendums, and any other transaction-related documents. Our AI is specifically trained on real estate documentation to provide accurate insights."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We use bank-level AES-256 encryption for all documents, both at rest and in transit. We don't store your documents permanently—we analyze them and provide results, then securely delete them. All data handling complies with GDPR and CCPA standards."
    },
    {
      question: "How much does Contre cost?",
      answer: "We offer flexible pricing for individual agents, teams, and brokerages. Contact us at ct@contre.ai for a demo and custom pricing based on your needs. We also offer a free trial so you can experience Contre risk-free."
    },
    {
      question: "Do I need technical expertise to use Contre?",
      answer: "Not at all. Contre is designed to be intuitive and user-friendly. Simply upload your documents, and our AI does the rest. You can ask questions in plain English using our chatbot interface and get instant answers about any aspect of your transaction."
    },
    {
      question: "Can Contre integrate with my existing tools?",
      answer: "We're actively building integrations with popular real estate platforms. Contact us to discuss your specific integration needs and we'll work with you to ensure Contre fits seamlessly into your workflow."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide email support with response times typically under 24 hours. For enterprise customers, we offer priority support and dedicated onboarding assistance."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a free trial so you can experience how Contre protects your transactions before committing. Contact us at ct@contre.ai to get started."
    }
  ]

  return (
    <PolicyPageLayout title="Get in Touch">
      <section className="space-y-8">
        {/* Hero */}
        <div className="text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Have questions about Contre? Want to see how our AI-powered platform can protect your deals?
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Email Card */}
          <div className="bg-gradient-to-br from-[#264E36]/10 to-[#607D3B]/10 p-8 rounded-lg text-center">
            <div className="bg-[#264E36] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-2">
              Email Us
            </h3>
            <a
              href="mailto:ct@contre.ai"
              className="text-2xl font-semibold text-[#3ca2fa] hover:underline"
            >
              ct@contre.ai
            </a>
            <p className="text-sm text-gray-600 mt-3">
              We typically respond within 24 hours
            </p>
          </div>

          {/* Schedule Demo Card */}
          <div className="bg-gradient-to-br from-[#607D3B]/10 to-[#9DBFBF]/10 p-8 rounded-lg text-center">
            <div className="bg-[#607D3B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-2">
              Schedule a Demo
            </h3>
            <p className="text-gray-700 mb-4">
              See Contre in action with a personalized walkthrough
            </p>
            <Button variant="outline" className="font-['Manrope']">
              Book a Time
            </Button>
          </div>
        </div>

        {/* Location */}
        <div className="text-center bg-gray-50 p-6 rounded-lg max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <MapPin size={20} className="text-[#607D3B]" />
            <p>
              <strong>Based in Coeur d'Alene, ID</strong> • Serving real estate professionals nationwide
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Find quick answers to common questions about Contre
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-[#607D3B] flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#264E36]/10 via-[#607D3B]/10 to-[#9DBFBF]/10 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-700 mb-6">
            We're here to help. Send us an email and we'll get back to you within 24 hours.
          </p>
          <a href="mailto:ct@contre.ai">
            <Button className="bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] hover:from-[#1a3624] hover:via-[#4a5f2d] hover:to-[#7da3a3] font-['Manrope'] text-lg px-8 py-6">
              <Mail size={20} className="mr-2" />
              Email ct@contre.ai
            </Button>
          </a>
        </div>
      </section>
    </PolicyPageLayout>
  )
}

export default Contact
