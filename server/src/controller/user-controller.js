// packages
import bcrypt from 'bcrypt'
// models
import userModel from '../model/User.js'
// functions
import { createToken } from '../utils/common.js'

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

      if (!result) {
        res.status(403).json({
          success: false,
          error: 'Password does not match'
        })
      }
      // res.json({ success: true })
      const token = createToken(userData._id)
      res.json({
        success: true,
        token
      })
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    })
  }
}
