import express from 'express'
import dotenv from 'dotenv'
import connection from './db/connect.js'
dotenv.config()

const app = express()
app.listen(process.env.PORT)

connection(process.env.URI)

app.get('/', (req, res) => {
  res.send('Working')
})
