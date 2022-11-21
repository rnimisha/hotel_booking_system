import express from 'express'
import { loginUser, registerUser, updateProfile } from '../../controller/user-controller.js'
import { validateBody } from '../../middleware/validator.js'
const router = express.Router()

router.post('/register', validateBody('registerValidationSchema'), registerUser)
router.post('/login', validateBody('loginValidationSchema'), loginUser)
router.put('/profile', updateProfile)

export default router
