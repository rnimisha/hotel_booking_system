import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
  roomNo: {
    type: String,
    required: true,
    unique: true
  },
  roomType: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ammenties: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'ammenties'
  },
  images: {
    type: [String]
  }
}, {
  collection: 'rooms'
})

const roomModel = mongoose.model('rooms', roomSchema)

export default roomModel
