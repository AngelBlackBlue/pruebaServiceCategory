const {category, service} = require('../database/index')

const serviceCreateController = async (req, res) => {
  try {
    const { title, categoryId} = req.body
    const newService = await service.create({ title, categoryId })
    return res.status(201).json(newService)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ServiceALLController = async (req, res) => {
  try {
    const result = await service.findAll({include: [
    { model: category }
  ],})
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {serviceCreateController, ServiceALLController}