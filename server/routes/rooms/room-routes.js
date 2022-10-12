import express from 'express'
import { getRooms, getRoomDetailById, insertRoom, insertRoomType, updateRoomType } from '../../controller/room-controller.js'

const router = express.Router()

router.get('/', getRooms)
router.get('/:id', getRoomDetailById)

router.post('/addroom', insertRoom)
router.post('/addroomtype', insertRoomType)

router.put('/', updateRoomType)

export default router
