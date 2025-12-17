'use client'

import Image from 'next/image'
import Link from 'next/link'

interface AuthLayoutProps {
  children: React.ReactNode
  rightPanel: {
    headline: string
    subtext: string
    stats?: string[]
  }
}

export function AuthLayout({ children, rightPanel }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-[#f8f9fa]">
        {/* Logo */}
        <div className="p-8">
          <Link href="/">
            <Image
              src="/contre-logo.png"
              alt="Contre"
              width={180}
              height={60}
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* Form Content */}
        <div className="flex-1 flex items-center justify-center px-8 lg:px-16 pb-12">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>
      </div>

      {/* Right Panel - Marketing (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1a3624] via-[#264E36] to-[#607D3B] text-white flex-col justify-between p-16">
        <div className="flex-1 flex flex-col justify-center">
          {/* Headline */}
          <h1 className="text-4xl xl:text-5xl font-semibold font-['Bebas_Neue'] leading-tight mb-6">
            {rightPanel.headline}
          </h1>

          {/* Subtext */}
          <p className="text-lg xl:text-xl text-white/90 font-['Manrope'] leading-relaxed mb-8">
            {rightPanel.subtext}
          </p>

          {/* Stats (if provided) */}
          {rightPanel.stats && rightPanel.stats.length > 0 && (
            <div className="space-y-3">
              {rightPanel.stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#9DBFBF] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/90 font-['Manrope']">{stat}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trust Badge */}
        <div className="pt-8 border-t border-white/20">
          <p className="text-sm text-white/70 font-['Manrope']">
            Trusted by SkySlope and many other industry leaders
          </p>
        </div>
      </div>
    </div>
  )
}
