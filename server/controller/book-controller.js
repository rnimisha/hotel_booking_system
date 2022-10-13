import roomModel from '../model/room.js'

export const insertBooking = async (req, res) => {
  try {
    await roomModel.findOneAndUpdate(
      { _id: req.body.id },
      { $push: { bookings: req.body.data } }
    )
    res.json({
      success: true
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}
