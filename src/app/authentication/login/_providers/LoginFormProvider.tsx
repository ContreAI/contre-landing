'use client'

import { Formik, FormikHelpers } from 'formik'
import { loginFormSchema, LoginFormValues } from '../_schema/loginFormSchema'
import { createClient } from '@/lib/supabase/client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface LoginFormProviderProps {
  children: (props: {
    isLoading: boolean
    error: string | null
    handleOAuthSignIn: (provider: 'google' | 'apple') => Promise<void>
  }) => React.ReactNode
}

const initialValues: LoginFormValues = {
  email: '',
  password: '',
}

export function LoginFormProvider({ children }: LoginFormProviderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClient()

  // Check for auth errors in URL
  useEffect(() => {
    const errorParam = searchParams?.get('error')
    if (errorParam === 'auth_failed') {
      setError('Authentication failed. Please try again.')
    }
  }, [searchParams])

  const handleOAuthSignIn = async (provider: 'google' | 'apple') => {
    setIsLoading(true)
    setError(null)

    try {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || window.location.origin
      
      // Get redirect destination from query param
      const redirectTo = searchParams?.get('redirectTo')
      const redirectPath = redirectTo || '/dashboard'
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${siteUrl}/authentication/callback?next=${encodeURIComponent(redirectPath)}`,
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
      setError(err instanceof Error ? err.message : 'OAuth sign-in failed')
      setIsLoading(false)
    }
  }

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    setIsLoading(true)
    setError(null)

    try {
      // First check if the user exists and their verification status
      const checkResponse = await fetch('/api/auth/check-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.email }),
      })

      if (checkResponse.ok) {
        const { exists, verified } = await checkResponse.json()

        // If user exists but is not verified, redirect to verification page
        if (exists && !verified) {
          // Sign them out if they somehow got signed in
          await supabase.auth.signOut()
          router.push(`/authentication/verify-email?email=${encodeURIComponent(values.email)}`)
          return
        }
      }

      // Proceed with login
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      })

      if (error) {
        // Check if error is due to email not confirmed
        if (error.message.toLowerCase().includes('email not confirmed') ||
            error.message.toLowerCase().includes('email not verified')) {
          router.push(`/authentication/verify-email?email=${encodeURIComponent(values.email)}`)
          return
        }
        throw error
      }

      if (data.user) {
        // Double-check if user's email is verified
        if (!data.user.email_confirmed_at) {
          // Sign out and redirect to verification page
          await supabase.auth.signOut()
          router.push(`/authentication/verify-email?email=${encodeURIComponent(values.email)}`)
          return
        }

        // Get redirect destination from query param
        const redirectTo = searchParams?.get('redirectTo')

        if (redirectTo) {
          // External redirect (cookie already set by Supabase)
          window.location.href = redirectTo
        } else {
          // Internal redirect to dashboard
          router.push('/dashboard')
          router.refresh()
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormSchema}
      onSubmit={handleSubmit}
    >
      {children({ isLoading, error, handleOAuthSignIn })}
    </Formik>
  )
}

