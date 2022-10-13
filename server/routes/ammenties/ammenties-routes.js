import express from 'express'
import { addAmmenties, getAllAmmenties } from '../../controller/ammenties-controller.js'

const router = express.Router()

router.post('/', addAmmenties)
router.get('/', getAllAmmenties)

export default router
