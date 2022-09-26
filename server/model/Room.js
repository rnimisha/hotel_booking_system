import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
  roomNo: {
    type: 'String',
    required: true,
    unique: true
  },
  roomType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'roomType'
  }
})

const roomModel = mongoose.model('room', roomSchema)

export default roomModel
