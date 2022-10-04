import roomTypeModel from '../model/roomType.js'
import roomModel from '../model/room.js'
import ammentiesModel from '../model/Ammenties.js'

export const getRooms = async (req, res) => {
  let filterObj = {}

  filterObj = req.query.roomtype ? { ...filterObj, name: req.query.roomtype } : { ...filterObj }
  filterObj = req.query.capacity ? { ...filterObj, capacity: Number(req.query.capacity) } : { ...filterObj }

  // const bookingFilter = {
  //   checkInDate: {
  //     $gte: '2022-10-19', $lte: '2022-10-20'
  //   }
  // }

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
                          { checkInDate: { $gte: new Date('2025-01-02') } },
                          { checkOutDate: { $lte: new Date('2021-01-01') } }
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
                           { checkInDate: { $gte: new Date('2021-01-01'), $lte: new Date('2025-01-02') } },
                           { to: { $lte: new Date('2025-01-02'), $gte: new Date('2021-01-01') } }
                         ]
                        }
                      }
                    }
                  }
                ]

              // {
              //   $elemMatch: {
              //     $and: [
              //       { checkInDate: { $gte: new Date('2025-01-02') } }, // greater than new checoutdate
              //       { checkOutDate: { $lte: new Date('2025-01-01') } } // less than new check in date
              //     ]
              //   }
              // }
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
        }
      ])
    } else {
      allRooms = await roomTypeModel.aggregate([
        {
          $match: filterObj
        }
      ])
    }
    console.log(allRooms)

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
