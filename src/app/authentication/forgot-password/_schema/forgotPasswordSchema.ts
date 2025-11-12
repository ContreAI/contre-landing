import * as Yup from 'yup'

export interface ForgotPasswordValues {
  email: string
}

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
})

export const forgotPasswordInitialValues: ForgotPasswordValues = {
  email: '',
}

