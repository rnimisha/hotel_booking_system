import express from 'express'
import { insertBooking } from '../../controller/book-controller.js'
const router = express.Router()

router.put('/', insertBooking)

export default router
