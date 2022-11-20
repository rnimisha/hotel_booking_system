import roomModel from '../model/room.js'

export const insertBooking = async (req, res) => {
  try {
    const { id, userId, checkInDate, checkOutDate } = req.body

    const roomDetail = await roomModel.findOne({ roomType: id })
    await roomModel.findOneAndUpdate(
      { _id: roomDetail._id },
      { $push: { bookings: { userId, checkInDate, checkOutDate } } }
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

export const getBooking = async (req, res) => {
  try {
    const bookings = await roomModel.aggregate([
      {
        $project: {
          roomNo: 1,
          bookings: 1
        }
      },
      {
        $unwind: '$bookings'
      }
    ])
    res.json({
      success: true,
      data: bookings
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}
