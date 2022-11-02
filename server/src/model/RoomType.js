import mongoose from 'mongoose'

const roomTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
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
  image: {
    type: String
  }
}, {
  collection: 'roomType'
})

const roomTypeModel = mongoose.model('roomType', roomTypeSchema)

export default roomTypeModel
