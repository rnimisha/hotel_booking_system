import express from 'express'
import { addAmmenties } from '../../controller/ammenties-controller.js'

const router = express.Router()

router.post('/', addAmmenties)

export default router
