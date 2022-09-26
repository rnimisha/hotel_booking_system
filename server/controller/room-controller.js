import roomTypeModel from '../model/roomType.js'
import roomModel from '../model/room.js'

export const getAllRoomType = async (req, res) => {
  try {
    const allRooms = await roomTypeModel.find({})
    res.json({
      data: allRooms
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}

export const insertRoomType = async (req, res) => {
  try {
    await roomTypeModel.create(req.body)
    res.json({
      success: true
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}

export const insertRoom = async (req, res) => {
  const newRoom = req.body
  try {
    await roomModel.create(newRoom)
    res.json({
      success: true
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}
