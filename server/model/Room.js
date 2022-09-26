import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
  roomNo: {
    type: String,
    required: true,
    unique: true
  },
  roomType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'roomType'
  }
}, {
  collection: 'rooms'
})

const roomModel = mongoose.model('rooms', roomSchema)

export default roomModel
