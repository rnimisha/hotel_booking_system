import express from 'express'
import { loginUser, registerUser } from '../../controller/user-controller.js'
import { validateBody } from '../../middleware/validator.js'
const router = express.Router()

router.post('/register', validateBody('registerValidationSchema'), registerUser)
router.post('/login', validateBody('loginValidationSchema'), loginUser)

export default router
