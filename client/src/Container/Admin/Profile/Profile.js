import React from 'react'
import { Formik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { changeUserInfo } from '../../../features/user/userSlice'
// styles
import { MainContainer, FormContainer } from './profile.styled'
import { StyledForm } from '../../../Components/Form/FormStyle'
// components
import Button from '../../../Components/Button/Button'
import InputField from '../../../Components/Form/InputField/InputField'

const Profile = () => {
  const { id, name, email, token } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const initialValues = {
    name,
    email
  }

  const onSubmit = (values, { setSubmitting, setErrors }) => {
    console.log(values)
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        name: values.name,
        email: values.email
      })
    }

    fetch('http://localhost:3000/users/profile', requestOptions)
      .then((response) => {
        return response.json()
      }).then((data) => {
        if (data.success) {
          dispatch(changeUserInfo({ ...data.userData, token }))
        } else {
          setErrors(data.error)
        }
      }).catch((error) => {
        console.log('Error : ' + error)
      })
    setSubmitting(false)
  }
  return (
    <MainContainer>
        <FormContainer>
            <Formik
                initialValues = {initialValues}
                // validationSchema = {LOGIN_VALIDATION_SCHEMA}
                onSubmit = {onSubmit}
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
