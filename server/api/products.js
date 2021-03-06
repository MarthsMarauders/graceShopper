const router = require('express').Router()
const {Product, Order} = require('../db/models')
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
//Not Working Properly. When new product is created name is showing up as null
router.post('/', async (req, res, next) => {
  const {name, description, rating, price, quantity} = req.body
  try {
    const newProduct = await Product.create({
      name: name,
      description: description,
      rating: rating,
      price: price,
      quantity: quantity
    })
    res.json(newProduct)
  } catch (error) {
    next(error)
  }
})

//NOT WORKING PROPERLY
router.put('/:productId', async (req, res, next) => {
  try {
    const {productId} = req.params
    const product = await Product.findByPk(productId)
    res.json(await product.update(req.body))
  } catch (error) {
    next(error)
  }
})

router.delete('/:productId', async (req, res, next) => {
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
