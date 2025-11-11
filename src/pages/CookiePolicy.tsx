import { PolicyPageLayout } from "@/components/ui/policy-page-layout"
import { Cookie, Lock, BarChart3, Settings } from "lucide-react"

function CookiePolicy() {
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

            {/* Functional Cookies */}
            <div className="border-l-4 border-[#607D3B] bg-[#607D3B]/5 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-[#264E36] mb-3">Functional Cookies</h3>
              <p className="text-gray-700 mb-4">These cookies remember your choices and provide enhanced features.</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Language Preferences</p>
                  <p className="text-gray-700 text-sm">Remember your language settings</p>
                  <p className="text-gray-600 text-xs">Duration: 1 year</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Theme Settings</p>
                  <p className="text-gray-700 text-sm">Remember light/dark mode preference</p>
                  <p className="text-gray-600 text-xs">Duration: 1 year</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">UI Preferences</p>
                  <p className="text-gray-700 text-sm">Remember layout and display settings</p>
                  <p className="text-gray-600 text-xs">Duration: 6 months</p>
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
                <div>
                  <p className="font-semibold text-gray-900">Mixpanel</p>
                  <p className="text-gray-700 text-sm">Track feature adoption and user journeys</p>
                  <p className="text-gray-600 text-xs">Duration: 1 year</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Hotjar</p>
                  <p className="text-gray-700 text-sm">Session recordings for UX improvement</p>
                  <p className="text-gray-600 text-xs">Duration: Session</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            Third-Party Cookies
          </h2>
          <p className="text-gray-700 mb-4">
            Some of our pages may contain content from third-party services that may set their own cookies:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-[#264E36] mb-3">Third-Party Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Stripe:</strong> Payment processing (only on checkout pages)</li>
              <li><strong>Intercom:</strong> Customer support chat widget</li>
              <li><strong>YouTube:</strong> Embedded tutorial videos</li>
              <li><strong>Google Fonts:</strong> Typography loading</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              These services have their own privacy policies governing their use of cookies.
            </p>
          </div>
        </div>

        {/* Managing Your Cookie Preferences */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-6">
            Managing Your Cookie Preferences
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#264E36] mb-3">Cookie Control Options</h3>

              <div className="space-y-4">
                <div className="bg-[#607D3B]/10 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Platform Settings</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Manage your cookie preferences directly in our platform:
                  </p>
                  <button className="text-[#3ca2fa] hover:underline font-semibold text-sm">
                    Open Cookie Settings
                  </button>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Browser Settings</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    You can also control cookies through your browser:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-2">
                    <li>Chrome</li>
                    <li>Firefox</li>
                    <li>Safari</li>
                    <li>Edge</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3 italic">
                    Note: Disabling essential cookies may prevent you from using certain features of our platform, including staying logged in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Details Table */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            Cookie Details Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-[#264E36] text-white">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left">Cookie Name</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Purpose</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Duration</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Type</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">auth_token</td>
                  <td className="border border-gray-300 px-4 py-3">Authentication</td>
                  <td className="border border-gray-300 px-4 py-3">7 days</td>
                  <td className="border border-gray-300 px-4 py-3">Essential</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">csrf_token</td>
                  <td className="border border-gray-300 px-4 py-3">Security</td>
                  <td className="border border-gray-300 px-4 py-3">Session</td>
                  <td className="border border-gray-300 px-4 py-3">Essential</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">theme_pref</td>
                  <td className="border border-gray-300 px-4 py-3">UI Preference</td>
                  <td className="border border-gray-300 px-4 py-3">1 year</td>
                  <td className="border border-gray-300 px-4 py-3">Functional</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">_ga</td>
                  <td className="border border-gray-300 px-4 py-3">Analytics</td>
                  <td className="border border-gray-300 px-4 py-3">2 years</td>
                  <td className="border border-gray-300 px-4 py-3">Analytics</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">_gid</td>
                  <td className="border border-gray-300 px-4 py-3">Analytics</td>
                  <td className="border border-gray-300 px-4 py-3">24 hours</td>
                  <td className="border border-gray-300 px-4 py-3">Analytics</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">mp_*</td>
                  <td className="border border-gray-300 px-4 py-3">Mixpanel Analytics</td>
                  <td className="border border-gray-300 px-4 py-3">1 year</td>
                  <td className="border border-gray-300 px-4 py-3">Analytics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Do Not Track Signals */}
        <div className="bg-[#264E36]/5 p-6 rounded-lg">
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            Do Not Track Signals
          </h2>
          <p className="text-gray-700">
            We respect Do Not Track (DNT) signals. When we detect a DNT signal from your browser, we disable analytics cookies and limit tracking to essential functions only. You will still be able to use all features of our platform.
          </p>
        </div>

        {/* Updates to This Policy */}
        <div>
          <h2 className="text-2xl font-bold font-['Bebas_Neue'] text-[#264E36] mb-4">
            Updates to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by updating the date at the top of this policy and, where appropriate, through in-app notifications.
          </p>
        </div>
      </section>
    </PolicyPageLayout>
  )
}

export default CookiePolicy
