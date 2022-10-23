import mongoose from 'mongoose'

const servicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  collection: 'services'
})

const servicesModel = mongoose.model('services', servicesSchema)

export default servicesModel
