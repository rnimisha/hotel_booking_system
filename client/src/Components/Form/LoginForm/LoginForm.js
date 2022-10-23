import React from 'react'
import { Formik } from 'formik'
import LOGIN_VALIDATION_SCHEMA from '../../../Validation/LoginValidationSchema'

// styled components
import { StyledForm } from '../FormStyle'

// components
import Button from '../../Button/Button'
import InputField from '../InputField/InputField'

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: ''
  }

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
  }
  return (
    <Formik
    initialValues = {initialValues}
    validationSchema = {LOGIN_VALIDATION_SCHEMA}
    onSubmit = {onSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <StyledForm>
              <InputField name='email' label='Email'/>
              <InputField type='password' name='password' label='Password'/>
              <br />
              <Button
              text= {isSubmitting ? 'Submiting...' : 'Login'}
              styling = {{ padding: '15px 40px', marginBottom: '5px' }}
              disabled= {isSubmitting}
              type= 'submit'
              />
          </StyledForm>
        )
      }}
    </Formik>
  )
}

export default LoginForm
