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
  },
  bookings: {
    type: [
      {
        userID: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      },
      {
        checkInDate: Date,
        required: true
      },
      {
        checkOutDate: Date,
        required: true
      }
    ]
  },
  status: {
    type: String,
    required: true,
    default: 'active'
  }
}, {
  collection: 'rooms'
})

const roomModel = mongoose.model('rooms', roomSchema)

export default roomModel
