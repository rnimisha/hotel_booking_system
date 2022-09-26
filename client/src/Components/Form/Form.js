import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import { FormContainer, FormBox } from './FormStyle'

const Form = ({ formtype }) => {
  return (
    <FormContainer>
        <FormBox>
            {
                formtype === 'login'
                  ? <LoginForm/>
                  : <LoginForm/>
            }
        </FormBox>
    </FormContainer>
  )
}

export default Form
