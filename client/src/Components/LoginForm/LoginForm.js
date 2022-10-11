import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

// styled components
import { StyledForm } from '../Form/FormStyle'

// components
import Button from '../Button/Button'
import InputField from '../InputField/InputField'

const LoginForm = () => {
  const initialValues = {
    useremail: '',
    userpass: ''
  }

  const loginValidationSchema = Yup.object().shape({
    useremail: Yup.string()
      .email('Invalid email')
      .required('Required')
  })

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  }
  return (
    <Formik
    initialValues = {initialValues}
    validationSchema = {loginValidationSchema}
    onSubmit = {onSubmit}
    >
      {({
        isSubmitting,
        valid
      }) => {
        return (
          <StyledForm>
              <InputField
              name='useremail'
              label='Email'/>

              <InputField
              type='password'
              name='userpass'
              label='Password'/>
              <br />

              <Button
              text= {isSubmitting ? 'Submiting...' : 'Login'}
              styling = {{ padding: '15px 40px', marginBottom: '5px' }}
              disabled= {isSubmitting || !valid}
              type= 'submit'
              />
          </StyledForm>
        )
      }}
    </Formik>
  )
}

export default LoginForm
