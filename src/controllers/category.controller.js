const {category} = require('../database/index')

const categoryCreateController = async (req, res) => {
  try {
    console.log(req.body)
    const { id, name} = req.body
    const newCategory = await category.create({ id, name})
    console.log(newCategory)
    res.status(201).json(newCategory)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {categoryCreateController}