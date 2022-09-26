import mongoose from 'mongoose'

const roomTypeSchema = new mongoose.Schema({
  name: {
    type: 'String',
    require: 'True'
  },
  price: {
    type: 'Number',
    required: true
  },
  capacity: {
    type: 'Number',
    required: true
  },
  bedrooms: {
    type: 'Number',
    required: true
  },
  bathrooms: {
    type: 'Number',
    required: true
  },
  description: {
    type: 'String',
    required: 'True'
  },
  ammenties: {
    type: [String]
  },
  images: {
    type: [String]
  }
})

const roomTypeModel = mongoose.model('roomType', roomTypeSchema)

export default roomTypeModel
