import * as Yup from 'yup'

const REGISTER_VALIDATION_SCHEMA = Yup.object().shape({
  username: Yup.string()
    .required('Name is required')
    .min(3, 'Name cannot be less than 3 character'),
  useremail: Yup.string()
    .email('Provide a valid email')
    .required('Email is required'),
  userpass: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})/,
      'Must Contain 7 Characters, One Uppercase, One Lowercase, One Number'
    )
    .required('Password is required'),
  confirmpass: Yup.string()
    .required('Re-enter your password')
    .oneOf([Yup.ref('userpass')], 'Password do not match')
})

export default REGISTER_VALIDATION_SCHEMA
