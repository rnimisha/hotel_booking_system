import React from 'react'
import { Formik } from 'formik'
import REGISTER_VALIDATION_SCHEMA from '../../../Validation/RegisterValidationSchema'

import Button from '../../Button/Button'
import { StyledForm } from '../FormStyle'
import InputField from '../InputField/InputField'

const RegisterForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmpass: ''
  }

  const onSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    const { confirmpass, ...details } = values

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    }

    fetch('http://localhost:3000/users/register', requestOptions)
      .then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data)
        if (data.success) {
          // ------- to do --------- let user know success message----------------------------
          resetForm()
        } else {
          setErrors(data.error)
        }
      }).catch((error) => {
        console.log('Error : ' + error)
      })

    setSubmitting(false)
  }

  return (
      <Formik
      initialValues = {initialValues}
      validationSchema = {REGISTER_VALIDATION_SCHEMA}
      onSubmit = {onSubmit}
      >
        {({ isSubmitting }) => {
          return (
          <StyledForm>
            <InputField type='text' label='Name' name='name'/>
            <InputField label='Email' name='email' />
            <InputField type='password' label='Password' name='password'/>
            <InputField type='password' label='Confirm Password' name='confirmpass'/>
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
