'use client'

import { Formik, FormikHelpers } from 'formik'
import { loginFormSchema, LoginFormValues } from '../_schema/loginFormSchema'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface LoginFormProviderProps {
  children: (props: {
    isLoading: boolean
    error: string | null
    signInWithGoogle: () => Promise<void>
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
  const supabase = createClient()

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
        // Redirect to dashboard
        router.push('/dashboard')
        router.refresh()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
      setSubmitting(false)
    }
  }

  const signInWithGoogle = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Google sign-in failed')
      setIsLoading(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormSchema}
      onSubmit={handleSubmit}
    >
      {children({ isLoading, error, signInWithGoogle })}
    </Formik>
  )
}

