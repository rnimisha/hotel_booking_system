import roomTypeModel from '../model/roomType.js'
import roomModel from '../model/room.js'
import ammentiesModel from '../model/Ammenties.js'

export const getAllRoomType = async (req, res) => {
  let filterObj = {}

  filterObj = req.query.roomtype ? { ...filterObj, name: req.query.roomtype } : { ...filterObj }
  filterObj = req.query.capacity ? { ...filterObj, capacity: Number(req.query.capacity) } : { ...filterObj }

  try {
    const allRooms = await roomTypeModel.aggregate([
      {
        $match: filterObj
      },
      {
        $lookup: {
          from: roomModel.collection.name,
          localField: '_id',
          foreignField: 'roomType',
          as: 'roomDetails'
        }
      }
    ])
    await roomTypeModel.populate(allRooms, {
      path: 'ammenties',
      model: ammentiesModel
    })

    res.json({
      data: allRooms
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}

export const getRoomDetailById = async (req, res) => {
  try {
    const roomDetail = await roomTypeModel.findOne({ _id: req.params.id }).populate({ path: 'ammenties', model: ammentiesModel })
    res.json({
      data: roomDetail
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
