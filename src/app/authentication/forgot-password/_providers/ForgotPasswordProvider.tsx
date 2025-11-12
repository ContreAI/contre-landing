'use client'

import { Formik, FormikHelpers } from 'formik'
import { forgotPasswordSchema, ForgotPasswordValues, forgotPasswordInitialValues } from '../_schema/forgotPasswordSchema'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'

interface ForgotPasswordProviderProps {
  children: (props: {
    isLoading: boolean
    error: string | null
    success: boolean
  }) => React.ReactNode
}

export function ForgotPasswordProvider({ children }: ForgotPasswordProviderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (
    values: ForgotPasswordValues,
    { setSubmitting }: FormikHelpers<ForgotPasswordValues>
  ) => {
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(
        values.email,
        {
          redirectTo: `${window.location.origin}/authentication/reset-password`,
        }
      )

      if (resetError) throw resetError

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send reset email')
    } finally {
      setIsLoading(false)
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={forgotPasswordInitialValues}
      validationSchema={forgotPasswordSchema}
      onSubmit={handleSubmit}
    >
      {children({ isLoading, error, success })}
    </Formik>
  )
}

