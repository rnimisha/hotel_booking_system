import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import connection from './db/connect.js'

import RoomRouter from './routes/rooms/room-routes.js'
import AmmentiesRouter from './routes/ammenties/ammenties-routes.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.listen(process.env.PORT)
connection(process.env.URI)

// routes
app.get('/', (req, res) => {
  res.send('Working')
})

app.use('/rooms', RoomRouter)
app.use('/ammenties', AmmentiesRouter)
