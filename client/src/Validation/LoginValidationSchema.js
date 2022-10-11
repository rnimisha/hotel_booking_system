import * as Yup from 'yup'

const LOGIN_VALIDATION_SCHEMA = Yup.object().shape({
  useremail: Yup.string()
    .email('Provide a valid email')
    .required('Email is required'),
  userpass: Yup.string()
    .min(7, 'Password should be 7 character')
    .required('Password is required')
})

export default LOGIN_VALIDATION_SCHEMA
