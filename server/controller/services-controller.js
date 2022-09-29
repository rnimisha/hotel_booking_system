import servicesModel from '../model/Services.js'

export const getAllServices = async (_, res) => {
  try {
    const allServices = await servicesModel.find({})

    res.json({
      data: allServices
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}

export const inserService = async (req, res) => {
  try {
    await servicesModel.create(req.body)

    res.json({
      success: true
    })
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}
