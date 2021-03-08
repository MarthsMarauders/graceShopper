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
router.get('/user-cart/:userId', async (req, res, next) => {
  try {
    // Find the exsisting order or create it
    const cart = await Order.findOrCreate({
      where: {
        completed: false,
        userId: req.params.userId
      }
    })
    // Define what we will send in either case.
    let cartProductsArr = null

    // If an Order was just created, grab it | Include associated products|
    if (cart[1]) {
      cartProductsArr = await Order.findAll({
        where: {
          id: cart[0].dataValues.id
        },
        include: {model: Product}
      })
    }
    //  If order exsisted, grab it | Include associated products |
    else {
      cartProductsArr = await Order.findAll({
        where: {
          id: cart[0].id
        },
        include: {model: Product}
      })
    }
    const allRowsInThrough = await OrderProducts.findAll({
      where: {
        orderId: cart[0].id
      }
    })
    // When a cart is mounted the totalPrice of the cart is created
    let totalCost = 0
    allRowsInThrough.forEach(row => {
      totalCost += row.price * row.numberOfItems
    })
    cart[0].totalPrice = totalCost
    await cart[0].save()

    res.json(cartProductsArr)
  } catch (error) {
    next(error)
  }
})
// 'Add to cart' button
// This post route will create rows in the through table and return the products added to the order number.
router.post('/user-cart/:userId/product/:productId', async (req, res, next) => {
  try {
    // Find the User
    const user = await User.findByPk(req.params.userId)
    // Find the Product
    const product = await Product.findByPk(req.params.productId)
    // // Find (or create) the Order & include the products
    let order = await Order.findOne({
      where: {
        completed: false,
        userId: user.id
      },
      include: {model: Product}
    })
    // order = order[0]
    // need to add the product to the order
    await order.addProducts(product)
    // need to find the order with the new order attached to it
    order = await Order.findOne({
      where: {
        completed: false,
        userId: user.id
      },
      include: {model: Product}
    })
    // set the product on the order using the through table or increment it
    // const doesProdExist = await order.hasProduct(product)
    // if (doesProdExist) {
    const rowInThroughTable = await OrderProducts.findOne({
      where: {
        orderId: order.id,
        productId: product.id
      }
    })
    // increment the number of items and input the price
    // rowInThroughTable.numberOfItems++
    rowInThroughTable.price = product.price
    await rowInThroughTable.save()
    // }
    // find all of the rows associated with the order to calculate the price
    const allRowsInThrough = await OrderProducts.findAll({
      where: {
        orderId: order.id
      }
    })
    // finds the price and sets it on the order
    let totalCost = 0
    allRowsInThrough.forEach(row => {
      totalCost += row.price * row.numberOfItems
    })
    //
    order.totalPrice = totalCost
    await order.save()
    //
    res.json(order)
  } catch (error) {
    next(error)
  }
})

// This will become the 'update quantity' route for the cart
// We should use a dropdown form that submits an integer in /:amount
router.put(
  '/user-cart/:userId/product/:productId/amount/:amount',
  async (req, res, next) => {
    try {
      // make number
      const amount = parseInt(req.params.amount)
      // Find User's order thats uncomplete
      const order = await Order.findOne({
        where: {
          completed: false,
          userId: req.params.userId
        },
        include: {model: Product}
      })
      // Get association table row and changes count.
      let rowInThroughTable = await OrderProducts.findOne({
        where: {
          orderId: order.id,
          productId: req.params.productId
        }
      })
      rowInThroughTable.numberOfItems = amount
      await rowInThroughTable.save()
      // grab each row related to the order and add the price to the order total price
      const allRowsInThrough = await OrderProducts.findAll({
        where: {
          orderId: order.id
        }
      })
      let totalCost = 0
      allRowsInThrough.forEach(row => {
        totalCost += row.price * row.numberOfItems
      })
      order.totalPrice = totalCost
      await order.save()
      // Send all associated order and products
      res.json(rowInThroughTable)
    } catch (error) {
      next(error)
    }
  }
)

// deletes a product from the through table aka cart
router.delete(
  '/user-cart/:userId/product/:productId',
  async (req, res, next) => {
    try {
      // finds the order
      const order = await Order.findOne({
        where: {
          completed: false,
          userId: req.params.userId
        }
      })
      // this is all for updating the orders totalPrice
      const allRowsInThrough = await OrderProducts.findAll({
        where: {
          orderId: order.id
        }
      })
      let totalCost = 0
      allRowsInThrough.forEach(row => {
        totalCost += row.price * row.numberOfItems
      })
      order.totalPrice = totalCost
      await order.save()
      // grabs the rows to delete
      const cartRowToDelete = await OrderProducts.findOne({
        where: {
          orderId: order.id,
          productId: req.params.productId
        }
      })
      // deletes the rows
      await cartRowToDelete.destroy()
      res.json(cartRowToDelete)
    } catch (error) {
      next(error)
    }
  }
)

// 'Checkout' button
// This post route will comeplete an order and add a new one.
router.post('/checkout/:userId', async (req, res, next) => {
  try {
    let userId = parseInt(req.params.userId)
    // Find the User
    const user = await User.findByPk(userId)
    // Find the Order & include the products
    let order = await Order.findOne({
      where: {
        completed: false,
        userId: user.id
      },
      include: {model: Product}
    })
    // Complete the order
    order.completed = true
    await order.save()
    // Create fresh order
    await user.createOrder()

    order = await Order.findOne({
      where: {
        completed: false,
        userId: user.id
      },
      include: {model: Product}
    })
    res.json(order)
  } catch (error) {
    next(error)
  }
})
