import userModel from '../model/User.js'

export const registerUser = async (req, res) => {
  try {
    await userModel.create(req.body)
    res.json({
      success: true
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}
