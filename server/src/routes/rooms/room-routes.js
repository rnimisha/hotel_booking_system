import express from 'express'
import { getRooms, getRoomDetailById, insertRoom, insertRoomType, updateRoomType, deleteRoomType, getRoomNoByType, deleteRoomNo } from '../../controller/room-controller.js'
import upload from '../../middleware/multer-storage.js'

const router = express.Router()

router.get('/', getRooms)
router.get('/:id', getRoomDetailById)
router.get('/roomno/:roomtype', getRoomNoByType)

router.post('/addroom', insertRoom)
router.post('/addroomtype', upload, (req, res) => {
  insertRoomType(req, res)
})
router.put('/', updateRoomType)

router.delete('/', deleteRoomType)
router.delete('/roomno', deleteRoomNo)

export default router
