const router = require('express').Router()
const {Order, User, Product, OrderProducts} = require('../db/models')
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
    const singleOrder = await Order.findByPk(id, {
      include: [{model: Product}]
    })
    res.json(singleOrder)
  } catch (error) {
    next(error)
  }
})

// deletes the order and deletes the rows from the through table
router.delete('/:orderId', async (req, res, next) => {
  try {
    const {orderId} = req.params
    const orderToDelete = await Order.findByPk(orderId)
    const rowsToDelete = await OrderProducts.findAll({
      where: {
        orderId: orderId
      }
    })
    for (let row of rowsToDelete) await row.destroy()
    // await rowsToDelete.destroy()
    await orderToDelete.destroy()
    // delete the through table rows
    res.json(orderToDelete)
  } catch (error) {
    next(error)
  }
})
