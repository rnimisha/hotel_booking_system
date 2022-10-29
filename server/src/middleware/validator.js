import Validators from '../validators/index.js'

export const validateBody = (validateSchema) => {
  return async (req, res, next) => {
    try {
      const validatedValue = await Validators[validateSchema].validateAsync(req.body, { abortEarly: false })
      req.body = validatedValue
      next()
    } catch (err) {
      const errorMessage = (err.details).reduce((acc, current) => {
        acc[current.path] = current.message
        return acc
      }, {})
      res.status(400).json({
        success: false,
        error: errorMessage
      })
    }
  }
}
