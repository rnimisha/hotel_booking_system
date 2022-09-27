import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'inactive',
    required: true
  },
  role: {
    type: String,
    default: 'customer',
    required: true
  }
}, {
  collection: 'rooms'
})

const userModel = mongoose.model('users', userSchema)

export default userModel
