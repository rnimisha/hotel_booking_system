import userModel from '../model/User.js'
import bcrypt from 'bcrypt'

export const registerUser = async (req, res) => {
  const saltRounds = 10
  try {
    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      if (err) {
        console.log(err.message)
        res.status(403).json({
          success: false,
          error: err.message
        })
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
      success: false,
      error: err.message
    })
  }
}

export const loginUser = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error('Email and password are required')
    }

    const userData = await userModel.findOne({ email: req.body.email })

    if (!userData) {
      throw new Error('Email is not registered')
    }

    bcrypt.compare(req.body.password, userData.password, function (err, result) {
      if (err) {
        res.status(403).json({
          success: false,
          error: err.message
        })
      }

      res.json({
        success: 'checking'
      })
      console.log(result)
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    })
  }
}
