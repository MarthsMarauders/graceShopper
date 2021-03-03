const router = require('express').Router()
const {Product, Order, Cart} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll()
    res.json(allProducts)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const singleProduct = await Product.findByPk(id)
    res.json(singleProduct)
  } catch (error) {
    next(error)
  }
})
