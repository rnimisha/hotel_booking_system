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
        userID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'users'
        },

        checkInDate: {
          type: Date,
          required: true
        },

        checkOutDate: {
          type: Date,
          required: true
        },
        services: {
          type: [mongoose.Schema.Types.ObjectId],
          ref: 'services',
          default: []
        },
        mode: {
          type: String,
          default: 'online'
        }
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
