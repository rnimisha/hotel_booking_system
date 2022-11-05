import express from 'express'
import { getBooking, insertBooking } from '../../controller/book-controller.js'
const router = express.Router()

router.get('/', getBooking)
router.put('/', insertBooking)

export default router
