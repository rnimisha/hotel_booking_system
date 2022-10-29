import Joi from 'joi'

const registerValidationSchema = Joi.object({
  name: Joi.string()
    .trim()
    .required()
    .min(3)
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name should be atleast 3 characters',
      'any.required': 'Name is required'
    }),
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
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})/)
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.pattern.base': ' Must Contain 7 Characters, One Uppercase, One Lowercase, One Number',
      'any.required': 'Password is required'
    })

})

export default registerValidationSchema
