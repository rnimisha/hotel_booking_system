import userModel from '../model/User.js'
import bcrypt from 'bcrypt'

export const registerUser = async (req, res) => {
  const saltRounds = 10
  try {
    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      if (err) {
        throw new Error(err.message)
      } else {
        req.body.password = hash
        await userModel.create(req.body)
        res.json({
          success: true
        })
      }
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}
