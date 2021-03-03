const router = require('express').Router()
const {Cart, Order, Product} = require('../db/models')
module.exports = router

// api/cart
router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      include: [
        {
          model: Product,
          as: 'products'
        }
      ]
    })
    res.json(cart)
  } catch (error) {
    next(error)
  }
})

// router.get('/:id', async (req, res, next) => {
//   try {
//     const {id} = req.params
//     const singleOrder = await Order.findByPk(id)
//     res.json(singleOrder)
//   } catch (error) {
//     next(error)
//   }
// })
