'use client'

import { Formik, FormikHelpers } from 'formik'
import { B2CSignupValues } from '../_schema/signupFormSchema'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface SignupFormProviderProps {
  initialValues: B2CSignupValues
  validationSchema: any
  children: (props: {
    isLoading: boolean
    error: string | null
    success: boolean
    handleOAuthSignIn: (provider: 'google' | 'apple') => Promise<void>
  }) => React.ReactNode
}

export function SignupFormProvider({ 
  initialValues, 
  validationSchema, 
  children 
}: SignupFormProviderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleOAuthSignIn = async (provider: 'google' | 'apple') => {
    setIsLoading(true)
    setError(null)

    try {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || window.location.origin
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${siteUrl}/authentication/callback?next=/onboarding`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      })

      if (error) {
        throw error
      }

      // OAuth redirect will happen automatically via data.url
      // The callback handler will process the OAuth response
    } catch (err) {
      setError(err instanceof Error ? err.message : 'OAuth sign-up failed')
      setIsLoading(false)
    }
  }

  const handleSubmit = async (
    values: B2CSignupValues,
    { setSubmitting }: FormikHelpers<B2CSignupValues>
  ) => {
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // Check if user already exists
      console.log('[Signup] Checking if user exists:', values.email)
      const checkResponse = await fetch('/api/auth/check-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.email }),
      })

      console.log('[Signup] Check response status:', checkResponse.status)

      let exists = false
      let verified = false

      if (!checkResponse.ok) {
        const errorData = await checkResponse.json().catch(() => ({}))
        console.error('[Signup] Check email API failed:', errorData)
        // If API fails, fallback: try signup anyway and let Supabase handle duplicate detection
        console.log('[Signup] API check failed, proceeding with signup (Supabase will handle duplicates)')
      } else {
        const checkData = await checkResponse.json()
        console.log('[Signup] Check response data:', checkData)

        exists = checkData.exists || false
        verified = checkData.verified || false
      }

      // If user exists but is not verified, show them a message to check their email
      if (exists && !verified) {
        console.log('[Signup] User exists but not verified')
        setError('This email is already registered but not verified. Please check your email for the verification link.')
        return
      }

      // If user exists and is verified, they should login instead
      if (exists && verified) {
        console.log('[Signup] User exists and is verified')
        setError('This email is already registered. Please sign in instead.')
        return
      }

      console.log('[Signup] User does not exist, proceeding with signup')

      // Basic metadata captured at signup
      const metadata = {
        first_name: values.firstName,
        last_name: values.lastName,
      }

      // Sign up the user
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || window.location.origin
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: metadata,
          emailRedirectTo: `${siteUrl}/authentication/callback?next=/onboarding`,
          // Use implicit flow (hash-based tokens) instead of PKCE
          // This ensures email verification links work without code verifier issues
        },
      })

      if (signUpError) {
        // Check if error is due to user already existing
        const errorMsg = signUpError.message?.toLowerCase() || ''
        if (errorMsg.includes('user already registered') ||
            errorMsg.includes('already been registered') ||
            errorMsg.includes('already exists')) {
          setError('This email is already registered. Please sign in instead.')
          return
        }
        throw signUpError
      }

      // Check if email confirmation is required
      if (data.user && !data.session) {
        setSuccess(true)
        // Email confirmation required - show success message
      } else if (data.session) {
        // Auto-confirmed, redirect to onboarding
        router.push('/onboarding')
        router.refresh()
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Signup failed'
      // Provide better error messages
      if (errorMsg.includes('Failed to verify email availability')) {
        setError('Unable to verify email. Please try again or contact support.')
      } else {
        setError(errorMsg)
      }
    } finally {
      setIsLoading(false)
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {children({ isLoading, error, success, handleOAuthSignIn })}
    </Formik>
  )
}
