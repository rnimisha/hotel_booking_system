import ammentiesModel from '../model/Ammenties.js'

export const addAmmenties = async (req, res) => {
  try {
    await ammentiesModel.create(req.body)
    res.json({
      success: true
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}
