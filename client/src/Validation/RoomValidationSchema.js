import * as Yup from 'yup'

const ROOM_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name cannot be less than 3 character'),
  capacity: Yup.number()
    .positive('Capacity needs to be atleast 1')
    .required('Capacity is required'),
  price: Yup.number()
    .positive('Price cannot be in negative')
    .required('Price is required'),
  bathrooms: Yup.number()
    .positive('Bathroom cannot be negative')
    .required('Bathroom count is required'),
  bedrooms: Yup.number()
    .positive('Bedroom cannot be negative')
    .required('Bedroom count is required'),
  ammenties: Yup.array()
    .min(1, 'Provdie ammenties')
    .required('Ammenties is required'),
  description: Yup.string()
    .required('Description is required')
})

export default ROOM_VALIDATION_SCHEMA
