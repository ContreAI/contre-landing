'use client'

import { Form, Field, ErrorMessage } from 'formik'
import { Button } from '@/components/ui/button'
import { Mail, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ForgotPasswordFormProps {
  isLoading: boolean
  error: string | null
  success: boolean
}

export function ForgotPasswordForm({ isLoading, error, success }: ForgotPasswordFormProps) {
  if (success) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
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

        {/* Success Content */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-md text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold font-['Bebas_Neue'] text-[#37474F] mb-2">
              Check your email
            </h2>
            <p className="text-gray-600 mb-6 font-['Manrope']">
              We've sent you a password reset link. Please check your email to reset your password.
            </p>
            <Link
              href="/authentication/login"
              className="text-sm font-medium text-[#264E36] hover:text-[#607D3B]"
            >
              ← Return to sign in
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
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
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold font-['Bebas_Neue'] text-[#37474F] mb-2">Reset your password</h1>
            <p className="text-gray-600 font-['Manrope']">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          <Form className="space-y-5">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 font-['Manrope']">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#264E36] focus:border-[#264E36] text-sm"
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
              </div>
              <ErrorMessage name="email" component="p" className="mt-1.5 text-sm text-red-600" />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-[#264E36] hover:bg-[#607D3B] text-white font-semibold font-['Manrope'] rounded-lg"
            >
              {isLoading ? 'Sending...' : 'Send reset link'}
            </Button>

            {/* Back to Login */}
            <div className="text-center">
              <Link
                href="/authentication/login"
                className="text-sm font-medium text-[#264E36] hover:text-[#607D3B]"
              >
                ← Back to sign in
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}
