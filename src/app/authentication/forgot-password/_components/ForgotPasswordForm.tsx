'use client'

import { Form, Field, ErrorMessage } from 'formik'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

interface ForgotPasswordFormProps {
  isLoading: boolean
  error: string | null
  success: boolean
}

export function ForgotPasswordForm({ isLoading, error, success }: ForgotPasswordFormProps) {
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-lg w-full space-y-8 p-10">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Check your email
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We've sent you a password reset link. Please check your email to reset your password.
            </p>
            <div className="mt-6">
              <Link 
                href="/authentication/login" 
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Return to sign in
              </Link>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-lg w-full space-y-8 p-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <Form className="mt-8 space-y-6">
          {/* Error Message */}
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            <ErrorMessage name="email" component="p" className="mt-2 text-sm text-red-600" />
          </div>

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLoading ? 'Sending...' : 'Send reset link'}
            </Button>
          </div>

          {/* Back to Login */}
          <div className="text-center">
            <Link 
              href="/authentication/login" 
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              ← Back to sign in
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  )
}

