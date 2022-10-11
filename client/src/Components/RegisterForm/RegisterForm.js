import React from 'react'
import { Formik } from 'formik'

import Button from '../Button/Button'
import { StyledForm } from '../Form/FormStyle'
import InputField from '../InputField/InputField'

const RegisterForm = () => {
  const initialValues = {
    username: '',
    useremail: '',
    userpass: '',
    confirmpass: ''
  }

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
      <Formik
      initialValues = {initialValues}
      onSubmit = {onSubmit}
      >
        {({
          isSubmitting,
          valid
        }) => {
          return (
          <StyledForm>
            <InputField type='text' label='Name' name='username'/>
            <InputField label='Email' name='useremail' />
            <InputField type='password' label='Password' name='userpass'/>
            <InputField type='text' label='Confirm Password' name='confirmpass'/>
            <Button
            text= {isSubmitting ? 'Submiting...' : 'Register'}
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

export default RegisterForm
