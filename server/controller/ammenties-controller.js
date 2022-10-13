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

export const getAllAmmenties = async (req, res) => {
  try {
    const data = await ammentiesModel.aggregate(
      [
        {
          $project: {
            _id: 0,
            value: '$_id',
            label: '$name'
          }
        }
      ]
    )
    res.json({
      data
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}
