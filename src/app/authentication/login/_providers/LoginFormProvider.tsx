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
    const errorParam = searchParams.get('error')
    if (errorParam === 'auth_failed') {
      setError('Authentication failed. Please try again.')
    }
  }, [searchParams])

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      })

      if (error) throw error

      if (data.user) {
        // Get redirect destination from query param or default to dashboard
        const redirectTo = searchParams.get('redirectTo') || '/dashboard'
        router.push(redirectTo)
        router.refresh()
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
      {children({ isLoading, error })}
    </Formik>
  )
}

