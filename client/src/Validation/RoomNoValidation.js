import * as Yup from 'yup'

const ROOMNO_VALIDATION_SCHEMA = Yup.object().shape({
  roomNo: Yup.string()
    .matches(/^[a-zA-Z0-9_]*$/, 'Must be alphanumeric')
    .required('Room number is required')
})

export default ROOMNO_VALIDATION_SCHEMA
