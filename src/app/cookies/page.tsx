import { Metadata } from 'next'
import { PolicyPageLayout } from "@/components/ui/policy-page-layout"
import { Cookie, Lock, BarChart3, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: 'Cookie Policy - Transparent Cookie Usage',
  description: 'Learn about how Contre AI uses cookies to enhance your experience while respecting your privacy.',
  keywords: ['cookie policy', 'cookies', 'privacy', 'tracking'],
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePolicyPage() {
  return (
    <PolicyPageLayout title="Cookie Policy" lastUpdated="January 15, 2024">
      <section className="space-y-8">
        {/* Hero Statement */}
        <div className="text-center py-8">
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Transparency about how we use cookies
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Effective: January 15, 2024
          </p>
        </div>

        {/* Cookie Usage at a Glance */}
        <div className="bg-[#264E36]/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-6">
            Cookie Usage at a Glance
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <Lock className="text-[#607D3B] mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">We use cookies to keep you logged in securely</p>
            </div>
            <div className="flex items-start space-x-3">
              <BarChart3 className="text-[#607D3B] mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">Analytics cookies help us improve the platform</p>
            </div>
            <div className="flex items-start space-x-3">
              <Settings className="text-[#607D3B] mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">You can control cookie preferences anytime</p>
            </div>
            <div className="flex items-start space-x-3">
              <Cookie className="text-[#607D3B] mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">We never use cookies for cross-site tracking</p>
            </div>
          </div>
        </div>

        {/* What Are Cookies */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            What Are Cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cookies are small text files placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, keeping you logged in, and understanding how you use our platform.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We also use similar technologies like local storage and session storage to enhance your experience and ensure our platform works correctly.
          </p>
        </div>

        {/* Types of Cookies We Use */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-6">
            Types of Cookies We Use
          </h2>

          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="border-l-4 border-[#264E36] bg-[#264E36]/5 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-[#264E36] mb-3">
                Essential Cookies <span className="text-sm font-normal text-gray-600">(Always Active)</span>
              </h3>
              <p className="text-gray-700 mb-4">These cookies are necessary for the platform to function and cannot be disabled.</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Authentication Cookies</p>
                  <p className="text-gray-700 text-sm">Keep you securely logged in</p>
                  <p className="text-gray-600 text-xs">Duration: Session</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Security Cookies</p>
                  <p className="text-gray-700 text-sm">Protect against CSRF attacks</p>
                  <p className="text-gray-600 text-xs">Duration: Session</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Load Balancing</p>
                  <p className="text-gray-700 text-sm">Ensure optimal server performance</p>
                  <p className="text-gray-600 text-xs">Duration: Session</p>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="border-l-4 border-[#9DBFBF] bg-[#9DBFBF]/5 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-[#264E36] mb-3">Analytics Cookies</h3>
              <p className="text-gray-700 mb-4">Help us understand how you use our platform so we can improve it.</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Google Analytics (_ga, _gid)</p>
                  <p className="text-gray-700 text-sm">Understand user behavior and platform usage</p>
                  <p className="text-gray-600 text-xs">Duration: 2 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="bg-[#264E36]/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700">
            For questions about this Cookie Policy:
          </p>
          <p className="text-gray-700 mt-3">
            <strong>Email:</strong> <a href="mailto:ct@contre.ai" className="text-[#3ca2fa] hover:underline">ct@contre.ai</a>
          </p>
        </div>
      </section>
    </PolicyPageLayout>
  )
}

