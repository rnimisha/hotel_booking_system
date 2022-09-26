import express from 'express'
import { getAllRoom } from '../../controller/room-controller.js'

const router = express.Router()

router.get('/', getAllRoom)

export default router
