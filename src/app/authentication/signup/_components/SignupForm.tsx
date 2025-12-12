'use client'

import { useState } from 'react'
import { Form, Field, ErrorMessage } from 'formik'
import { Button } from '@/components/ui/button'
import { Mail, Lock, User, AlertCircle, Eye, EyeOff } from 'lucide-react'

interface SignupFormProps {
  isLoading: boolean
  error: string | null
  success: boolean
  handleOAuthSignIn: (provider: 'google' | 'apple') => Promise<void>
}

export function SignupForm({ isLoading, error, success, handleOAuthSignIn }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  if (success) {
    return (
      <div className="w-full">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold font-['Bebas_Neue'] text-[#37474F] mb-2">
            Check your email
          </h2>
          <p className="text-gray-600 mb-6 font-['Manrope']">
            We've sent you a confirmation link. Please check your email to activate your account.
          </p>
          <a
            href="/authentication/login"
            className="text-sm font-medium text-[#264E36] hover:text-[#607D3B]"
          >
            Return to sign in
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold font-['Bebas_Neue'] text-[#37474F] mb-2">Create your account</h1>
        <p className="text-gray-600 font-['Manrope']">
          Get started with Contre to streamline your contract management.
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

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5 font-['Manrope']">
              First Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <Field
                id="firstName"
                name="firstName"
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#264E36] focus:border-[#264E36] text-sm"
                placeholder="John"
                disabled={isLoading}
              />
            </div>
            <ErrorMessage name="firstName" component="p" className="mt-1.5 text-sm text-red-600" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5 font-['Manrope']">
              Last Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <Field
                id="lastName"
                name="lastName"
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#264E36] focus:border-[#264E36] text-sm"
                placeholder="Doe"
                disabled={isLoading}
              />
            </div>
            <ErrorMessage name="lastName" component="p" className="mt-1.5 text-sm text-red-600" />
          </div>
        </div>

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

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5 font-['Manrope']">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <Field
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#264E36] focus:border-[#264E36] text-sm"
              placeholder="Enter your password"
              disabled={isLoading}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              )}
            </button>
          </div>
          <ErrorMessage name="password" component="p" className="mt-1.5 text-sm text-red-600" />
          <p className="mt-1.5 text-xs text-gray-500">
            Must be at least 8 characters with uppercase, lowercase, and number
          </p>
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5 font-['Manrope']">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              autoComplete="new-password"
              className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#264E36] focus:border-[#264E36] text-sm"
              placeholder="Confirm your password"
              disabled={isLoading}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              )}
            </button>
          </div>
          <ErrorMessage name="confirmPassword" component="p" className="mt-1.5 text-sm text-red-600" />
        </div>

        {/* Sign Up Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-[#264E36] hover:bg-[#607D3B] text-white font-semibold font-['Manrope'] rounded-lg"
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </Button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#f8f9fa] text-gray-500">OR</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => handleOAuthSignIn('google')}
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700 font-['Manrope']">Continue with Google</span>
          </button>

          <button
            type="button"
            onClick={() => handleOAuthSignIn('apple')}
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-sm font-medium text-gray-700 font-['Manrope']">Continue with Apple</span>
          </button>
        </div>

        {/* Terms */}
        <p className="text-xs text-center text-gray-500 mt-4 font-['Manrope']">
          By creating an account, you agree to our{' '}
          <a href="/terms" className="text-[#264E36] hover:text-[#607D3B]">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-[#264E36] hover:text-[#607D3B]">
            Privacy Policy
          </a>
        </p>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-600 mt-4 font-['Manrope']">
          Already have an account?{' '}
          <a
            href="/authentication/login"
            className="font-medium text-[#264E36] hover:text-[#607D3B]"
          >
            Sign In
          </a>
        </p>
      </Form>
    </div>
  )
}
