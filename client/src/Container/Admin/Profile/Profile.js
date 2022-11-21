import React from 'react'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
// styles
import { MainContainer, FormContainer } from './profile.styled'
import { StyledForm } from '../../../Components/Form/FormStyle'
// components
import Button from '../../../Components/Button/Button'
import InputField from '../../../Components/Form/InputField/InputField'

const Profile = () => {
  const { name, email } = useSelector((state) => state.users)
  const initialValues = {
    name,
    email
  }
  return (
    <MainContainer>
        <FormContainer>
            <Formik
                initialValues = {initialValues}
                // validationSchema = {LOGIN_VALIDATION_SCHEMA}
                // onSubmit = {onSubmit}
                >
                {({ isSubmitting }) => {
                  return (
                    <StyledForm>
                        <InputField name='email' label='Email' widthpx='100%'/>
                        <InputField type='text' label='Name' name='name' widthpx='100%'/>
                        <br />
                        <Button
                        text= {isSubmitting ? 'Updating..' : 'Update Profile'}
                        styling = {{ padding: '15px 40px', marginBottom: '5px' }}
                        disabled= {isSubmitting}
                        type= 'submit'
                        />
                    </StyledForm>
                  )
                }}
            </Formik>
        </FormContainer>
    </MainContainer>
  )
}

export default Profile
