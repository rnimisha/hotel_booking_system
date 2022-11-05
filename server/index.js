import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import connection from './src/db/connect.js'

// routes
import RoomRouter from './src/routes/rooms/room-routes.js'
import AmmentiesRouter from './src/routes/ammenties/ammenties-routes.js'
import BookRouter from './src/routes/book/book-routes.js'
import UserRouter from './src/routes/users/user-routes.js'
import ServiceRouter from './src/routes/services/services-route.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.listen(process.env.PORT)
connection(process.env.URI)

// routes
app.get('/', (_, res) => {
  res.send('Working')
})

app.use('/users', UserRouter)
app.use('/rooms', RoomRouter)
app.use('/ammenties', AmmentiesRouter)
app.use('/bookings', BookRouter)
app.use('/services', ServiceRouter)
