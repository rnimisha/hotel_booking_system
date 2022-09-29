import express from 'express'
import { inserService, getAllServices } from '../../controller/services-controller.js'

const Router = express.Router()

Router.get('/', getAllServices)
Router.post('/', inserService)

export default Router
