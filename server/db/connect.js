import mongoose from 'mongoose'

const connection = async (URI) => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('Connected to database')
  } catch (err) {
    console.log('Error : ' + err)
  }
}

export default connection
