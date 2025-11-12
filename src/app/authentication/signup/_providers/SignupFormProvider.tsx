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

  const handleSubmit = async (
    values: B2CSignupValues,
    { setSubmitting }: FormikHelpers<B2CSignupValues>
  ) => {
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // Basic metadata captured at signup
      const metadata = {
        first_name: values.firstName,
        last_name: values.lastName,
      }

      // Sign up the user
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: metadata,
          emailRedirectTo: `${window.location.origin}/authentication/callback?next=/onboarding`,
        },
      })

      if (signUpError) throw signUpError

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
      setError(err instanceof Error ? err.message : 'Signup failed')
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
      {children({ isLoading, error, success })}
    </Formik>
  )
}
