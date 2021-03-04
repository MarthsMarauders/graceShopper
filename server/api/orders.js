const router = require('express').Router()
const {Order, User, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      include: [{model: Product}]
    })
    res.json(allOrders)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const singleOrder = await Order.findByPk(id)
    res.json(singleOrder)
  } catch (error) {
    next(error)
  }
})
