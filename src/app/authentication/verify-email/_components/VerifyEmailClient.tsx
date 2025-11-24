'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, AlertCircle, CheckCircle, Loader2 } from 'lucide-react'

export function VerifyEmailClient() {
  const [isResending, setIsResending] = useState(false)
  const [resendSuccess, setResendSuccess] = useState(false)
  const [resendError, setResendError] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const supabase = createClient()

  const handleResendVerification = async () => {
    if (!email) {
      setResendError('Email address is required')
      return
    }

    setIsResending(true)
    setResendError(null)
    setResendSuccess(false)

    try {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || window.location.origin
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
        options: {
          emailRedirectTo: `${siteUrl}/authentication/callback?next=/onboarding`,
        },
      })

      if (error) throw error

      setResendSuccess(true)
    } catch (err) {
      setResendError(err instanceof Error ? err.message : 'Failed to resend verification email')
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-lg w-full space-y-8 p-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Verify your email
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We've sent a verification link to{' '}
            {email ? (
              <span className="font-medium text-gray-900">{email}</span>
            ) : (
              'your email address'
            )}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Please check your email and click the verification link to activate your account.
          </p>
        </div>

        <div className="space-y-4">
          {resendSuccess && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded relative flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span className="block sm:inline">
                Verification email sent successfully! Please check your inbox.
              </span>
            </div>
          )}

          {resendError && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded relative flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              <span className="block sm:inline">{resendError}</span>
            </div>
          )}

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              Didn't receive the email? Check your spam folder or resend it.
            </p>
            <Button
              onClick={handleResendVerification}
              disabled={isResending || !email}
              variant="outline"
              className="w-full"
            >
              {isResending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Resending...
                </>
              ) : (
                'Resend verification email'
              )}
            </Button>
          </div>

          <div className="text-center pt-4 border-t border-gray-200">
            <a
              href="/authentication/login"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Return to sign in
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}
