const router = require('express').Router()
const {OrderProducts, Order, User, Product} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await OrderProducts.findAll()
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

// gets the cart for a user making sure complete is false
router.get('/:userId/mycart', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        completed: false,
        userId: req.params.userId
      }
    })
    const cartProductsArr = await Order.findAll({
      where: {
        id: cart.id
      },
      include: {model: Product}
    })

    res.json(cartProductsArr)
  } catch (error) {
    next(error)
  }
})

// creates an order and adds the first product to it
router.post('/:userId/:productId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    const product = await Product.findByPk(req.params.productId)
    await user.createOrder()
    const order = await Order.findOne({
      where: {
        completed: false,
        userId: req.params.userId
      }
    })
    await order.setProducts(product)
    const cartRow = await OrderProducts.findOne({
      where: {
        orderId: order.id
      }
    })
    cartRow.price = product.price
    await cartRow.save()
    res.json(cartRow)
  } catch (error) {
    next(error)
  }
})

// adds a product to the cart
router.put('/:userId/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    const order = await Order.findOne({
      where: {
        completed: false,
        userId: req.params.userId
      }
    })
    await order.addProduct(product)
    const cartRow = await OrderProducts.findOne({
      where: {
        orderId: order.id,
        productId: req.params.productId
      }
    })
    cartRow.price = product.price
    await cartRow.save()
    const cartRows = await OrderProducts.findAll({
      where: {
        orderId: order.id
      }
    })
    res.json(cartRows)
  } catch (error) {
    next(error)
  }
})

// deletes a product from the through table aka cart
router.delete('/:userId/:productId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        completed: false,
        userId: req.params.userId
      }
    })
    const cartRowToDelete = await OrderProducts.findOne({
      where: {
        orderId: order.id,
        productId: req.params.productId
      }
    })
    await cartRowToDelete.destroy()
    res.json(cartRowToDelete)
  } catch (error) {
    next(error)
  }
})
