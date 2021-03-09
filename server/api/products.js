const router = require('express').Router()
const {Product, Order} = require('../db/models')
const adminCheck = require('../adminCheck')

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
router.get('/:id/edit', adminCheck, async (req, res, next) => {
  try {
    const {id} = req.params
    const singleProduct = await Product.findByPk(id)
    res.json(singleProduct)
  } catch (error) {
    next(error)
  }
})

router.post('/create', adminCheck, async (req, res, next) => {
  const {name, description, rating, price, quantity, imageUrl} = req.body
  try {
    const newProduct = await Product.create({
      name: name,
      description: description,
      rating: rating,
      price: price,
      quantity: quantity,
      imageUrl: imageUrl
    })
    res.json(newProduct)
  } catch (error) {
    next(error)
  }
})

router.put('/:productId', adminCheck, async (req, res, next) => {
  try {
    const {productId} = req.params
    const product = await Product.findByPk(productId)
    res.json(await product.update(req.body))
  } catch (error) {
    next(error)
  }
})

router.delete('/:productId', adminCheck, async (req, res, next) => {
  try {
    const {productId} = req.params
    const productToDelete = await Product.findByPk(productId)
    await productToDelete.destroy()
    console.log('THIS IS THE PRODUCT WE ARE DELETING', productToDelete)
    res.json(productToDelete)
  } catch (error) {
    next(error)
  }
})
