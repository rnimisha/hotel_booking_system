import roomTypeModel from '../model/roomType.js'
import roomModel from '../model/room.js'
import ammentiesModel from '../model/Ammenties.js'

export const getRooms = async (req, res) => {
  const page = req.query.page - 1 || 0
  const roomsPerPage = 6
  let filterObj = {}

  filterObj = req.query.roomtype ? { ...filterObj, name: req.query.roomtype } : { ...filterObj }
  filterObj = req.query.capacity ? { ...filterObj, capacity: Number(req.query.capacity) } : { ...filterObj }

  try {
    let allRooms

    if (req.query.checkin && req.query.checkout) {
      allRooms = await roomTypeModel.aggregate([
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
        },
        {
          $unwind: '$roomDetails'
        },
        {
          $match: {
            $or: [
              {
                'roomDetails.bookings':
                {
                  $size: 0
                }
              },
              {
                $and: [
                  {
                    'roomDetails.bookings':
                    {
                      $elemMatch: {
                        $or: [
                          { checkInDate: { $gte: new Date(req.query.checkout) } },
                          { checkOutDate: { $lte: new Date(req.query.checkin) } }
                        ]
                      }
                    }
                  },
                  {
                    'roomDetails.bookings':
                    {
                      $not:
                      {
                        $elemMatch:
                        {

                          $or:
                         [
                           { checkInDate: { $gte: new Date(req.query.checkin), $lte: new Date(req.query.checkout) } },
                           { to: { $lte: new Date(req.query.checkout), $gte: new Date(req.query.checkin) } }
                         ]
                        }
                      }
                    }
                  }
                ]
              }

            ]
          }
        },
        {
          $group: {
            _id: '$_id',
            price: { $first: '$price' },
            name: { $first: '$name' },
            capacity: { $first: '$capacity' },
            bedrooms: { $first: '$bedrooms' },
            bathrooms: { $first: '$bathrooms' },
            ammenties: { $first: '$ammenties' }
          }
        },
        {
          $sort: {
            createdAt: -1
          }
        },
        {
          $facet: {
            data: [
              {
                $skip: page * roomsPerPage
              },
              {
                $limit: roomsPerPage
              }
            ],
            count: [
              {
                $count: 'total'
              }
            ]
          }
        }

      ])
    } else {
      allRooms = await roomTypeModel.aggregate([
        {
          $match: filterObj
        },
        {
          $sort: {
            createdAt: -1
          }
        },
        {
          $facet: {
            data: [
              {
                $skip: page * roomsPerPage
              },
              {
                $limit: roomsPerPage
              }
            ],
            count: [
              {
                $count: 'total'
              }
            ]
          }
        }
      ])
    }

    await roomTypeModel.populate(allRooms, {
      path: 'ammenties',
      model: ammentiesModel
    })

    res.json({
      data: allRooms[0].data,
      count: Math.ceil((allRooms[0]?.count[0]?.total) / roomsPerPage) || 0
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}

export const getRoomNoByType = async (req, res) => {
  try {
    const rooms = await roomModel.find({ roomType: req.params.roomtype, status: 'active' })
    res.json({
      data: rooms
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}

export const getRoomDetailById = async (req, res) => {
  try {
    const roomDetail = await roomTypeModel.findOne(
      {
        _id: req.params.id
      })
      .populate(
        {
          path: 'ammenties',
          model: ammentiesModel,
          select: {
            value: '$_id',
            label: '$name',
            name: 1
          }
        }
      )
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
    req.body.image = req.file.filename
    const room = await roomTypeModel.create(req.body)
    res.json({
      success: room
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
    const roomNumber = await roomModel.findOne({ roomNo: req.body.roomNo })
    if (roomNumber) {
      res.status(401).json({
        success: false,
        error: {
          roomNo: ' Room Number already exists'
        }
      })
    } else {
      await roomModel.create(newRoom)
      res.json({
        success: true
      })
    }
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}

export const updateRoomType = async (req, res) => {
  try {
    const id = req.body.id
    delete req.body.id
    req.body.image = req.file.filename
    await roomTypeModel.findOneAndUpdate(
      { _id: id },
      req.body
    )
    res.json({
      success: true
    })
  } catch (err) {
    console.log(err.message)
    res.status(400).json({
      error: err.message
    })
  }
}

export const deleteRoomType = async (req, res) => {
  try {
    await roomTypeModel.findOneAndDelete({ _id: req.body.id })
    res.json({
      success: true
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}

export const deleteRoomNo = async (req, res) => {
  console.log('hello')
  try {
    await roomModel.findOneAndUpdate(
      { _id: req.body.id },
      { status: 'inactive' }
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
