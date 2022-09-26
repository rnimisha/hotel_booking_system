import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import { FormContainer, FormBox } from './FormStyle'
import Navigate from './Navigate'

const Form = ({ formtype }) => {
  return (
    <FormContainer>
        <FormBox>
            {
                formtype === 'login'
                  ? <>
                        <LoginForm/>
                        <Navigate msg='Dont have account yet?' path='register'/>
                    </>
                  : <>
                        <RegisterForm/>
                        <Navigate msg='Already have account?' path='login'/>
                    </>
            }
        </FormBox>
    </FormContainer>
  )
}

export default Form
