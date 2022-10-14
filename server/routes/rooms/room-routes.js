import express from 'express'
import { getRooms, getRoomDetailById, insertRoom, insertRoomType, updateRoomType, deleteRoomType, getRoomNoByType } from '../../controller/room-controller.js'

const router = express.Router()

router.get('/', getRooms)
router.get('/:id', getRoomDetailById)
router.get('/roomno/:roomtype', getRoomNoByType)

router.post('/addroom', insertRoom)
router.post('/addroomtype', insertRoomType)

router.put('/', updateRoomType)

router.delete('/', deleteRoomType)

export default router
