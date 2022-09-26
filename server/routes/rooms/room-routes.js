import express from 'express'
import { getAllRoom, insertRoom } from '../../controller/room-controller.js'

const router = express.Router()

router.get('/', getAllRoom)
router.post('/', insertRoom)

export default router
