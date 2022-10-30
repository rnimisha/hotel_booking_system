import Joi from 'joi'

const roomValidationSchema = Joi.object({
  name: Joi.string()
    .trim()
    .required()
    .min(3)
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name cannot be less than 3 character',
      'any.required': 'Name is required'
    }),
  capacity: Joi.number()
    .positive()
    .required()
    .messages({
      'number.empty': 'Capacity is required',
      'number.positive': 'Capacity cannot be in negative',
      'any.required': 'Capacity is required'
    }),
  price: Joi.number()
    .positive()
    .required()
    .messages({
      'number.empty': 'Price is required',
      'number.positive': 'Price cannot be in negative',
      'any.required': 'Price is required'
    }),
  bathrooms: Joi.number()
    .positive()
    .required()
    .messages({
      'number.empty': 'Bathroom is required',
      'number.positive': 'Bathrooms cannot be in negative',
      'any.required': 'Bathroom is required'
    }),
  bedrooms: Joi.number()
    .positive()
    .required()
    .messages({
      'number.empty': 'Bedrooms is required',
      'number.positive': 'Bedrooms cannot be in negative',
      'any.required': 'Bedrooms is required'
    }),
  description: Joi.string()
    .trim()
    .required()
    .messages({
      'number.empty': 'Description is required',
      'any.required': 'Description is required'
    })
})

export default roomValidationSchema
