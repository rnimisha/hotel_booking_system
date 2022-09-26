
import roomModel from '../model/room.js'

export const getAllRoom = async (req, res) => {
  try {
    const allRooms = await roomModel.find({})
    res.json({
      data: allRooms
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}
