const router = require('express').Router()
const {Order, User, Product} = require('../db/models')
const adminCheck = require('../adminCheck')

module.exports = router

router.get('/', adminCheck, async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      include: [{model: Product}]
    })
    res.json(allOrders)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', adminCheck, async (req, res, next) => {
  try {
    const {id} = req.params
    const singleOrder = await Order.findByPk(id, {
      include: [{model: Product}]
    })
    res.json(singleOrder)
  } catch (error) {
    next(error)
  }
})
router.post('/', adminCheck, async (req, res, next) => {
  try {
    const newOrder = await Order.create()
    res.json(newOrder)
  } catch (error) {
    next(error)
  }
})

//NOT WORKING PROPERLY
router.put('/:orderId', adminCheck, async (req, res, next) => {
  try {
    const {orderId} = req.params
    const order = await Order.findByPk(orderId)
    res.json(await order.update(req.body))
  } catch (error) {
    next(error)
  }
})

router.delete('/:orderId', adminCheck, async (req, res, next) => {
  try {
    const {orderId} = req.params
    const orderToDelete = await Order.findByPk(orderId)
    await orderToDelete.destroy()
    res.json(orderToDelete)
  } catch (error) {
    next(error)
  }
})
