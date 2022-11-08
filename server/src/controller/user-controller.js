// packages
import bcrypt from 'bcrypt'

// models
import userModel from '../model/User.js'

// functions
import { createToken } from '../utils/common.js'

export const registerUser = async (req, res) => {
  const saltRounds = 10
  try {
    const userData = await userModel.findOne({ email: req.body.email })
    if (userData) {
      res.status(401).json({
        success: false,
        error: {
          email: 'Email is already registered'
        }
      })
    } else {
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
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    })
  }
}

export const loginUser = async (req, res) => {
  try {
    const userData = await userModel.findOne({ email: req.body.email })

    // --------------check if email exists-------------
    if (!userData) {
      res.status(401).json({
        success: false,
        error: {
          email: 'Email is not registed'
        }
      })
    }

    // ------------compare password matches-------------
    bcrypt.compare(req.body.password, userData.password, function (err, result) {
      if (err) {
        res.status(403).json({
          success: false,
          error: err.message
        })
      }

      if (!result) {
        res.status(401).json({
          success: false,
          error: {
            password: 'Password does not match'
          }
        })
      } else {
        const token = createToken(userData._id)
        res.json({
          success: true,
          userData: {
            id: userData._id,
            role: userData.role,
            token
          }
        })
      }
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    })
  }
}
