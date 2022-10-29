import Joi from 'joi'

const loginValidationSchema = Joi.object({
  email: Joi.string()
    .trim()
    .email()
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Provide a valid email',
      'any.required': 'Email is required'
    }),
  password: Joi.string()
    .trim()
    .min(7)
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.min': ' Password should be atleast 7 characters',
      'any.required': 'Password is required'
    })
})

export default loginValidationSchema
