import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeUserInfo } from '../../../features/user/userSlice'
import { Formik } from 'formik'
import LOGIN_VALIDATION_SCHEMA from '../../../Validation/LoginValidationSchema'

// styled components
import { StyledForm } from '../FormStyle'

// components
import Button from '../../Button/Button'
import InputField from '../InputField/InputField'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialValues = {
    email: '',
    password: ''
  }

  const onSubmit = (values, { setSubmitting, resetForm, setErrors }) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }

    fetch('http://localhost:3000/users/login', requestOptions)
      .then((response) => {
        return response.json()
      }).then((data) => {
        if (data.success) {
          dispatch(changeUserInfo(data.userData))
          if (data.userData.role === 'customer') {
            navigate('/')
          } else {
            navigate('/admin/dashboard')
          }
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
