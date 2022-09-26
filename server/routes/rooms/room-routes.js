import express from 'express'
import { getAllRoomType, insertRoom, insertRoomType } from '../../controller/room-controller.js'

const router = express.Router()

router.get('/', getAllRoomType)

router.post('/addroom', insertRoom)
router.post('/addroomtype', insertRoomType)

export default router
