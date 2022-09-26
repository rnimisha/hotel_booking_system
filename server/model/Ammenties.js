import mongoose from 'mongoose'

const ammentiesSchema = new mongoose.Schema({
  name: {
    type: 'String',
    required: true
  },
  logo: {
    type: String
  }
}, {
  collection: 'ammenties'
})

const ammentiesModel = mongoose.model('ammenties', ammentiesSchema)

export default ammentiesModel
