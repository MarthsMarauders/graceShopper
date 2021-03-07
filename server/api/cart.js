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
    res.json(cartProductsArr)
  } catch (error) {
    next(error)
  }
})
// 'Add to cart' button
// This post route will create rows in the through table and return the products added to the order number.
router.post('/:userId/:productId', async (req, res, next) => {
  try {
    let rowToSendBack = undefined
    // Find the User
    const user = await User.findByPk(req.params.userId)
    // Find the Product
    const product = await Product.findByPk(req.params.productId)
    // Find (or create) the Order & include the products
    let order = await Order.findOrCreate({
      where: {
        completed: false,
        userId: user.id
      },
      include: {model: Product}
    })
    order = order[0] // just the order instance plz
    // set the product on the order using the through table or increment it
    const doesProdExist = await order.hasProduct(product)
    if (doesProdExist) {
      const rowInThroughTable = await OrderProducts.findOne({
        where: {
          orderId: order.id,
          productId: product.id
        }
      })
      rowInThroughTable.numberOfItems++
      await rowInThroughTable.save()
      rowToSendBack = rowInThroughTable
    } else await order.addProducts(product)
    // Find the row in the through table
    const cartRow = await OrderProducts.findOne({
      where: {
        orderId: order.id
      }
    })
    // add the price on the through table
    cartRow.price = product.price
    await cartRow.save()
    // send the order with the newly created association on it.
    res.json(rowToSendBack)
  } catch (error) {
    next(error)
  }
})

// This will become the 'update quantity' route for the cart
// We should use a dropdown form that submits an integer in /:amount
router.put('/:userId/:productId/:amount', async (req, res, next) => {
  try {
    // -----------------------------------
    // make number
    const amount = parseInt(req.params.amount)
    // console.log(amount, 'AMOUNT')
    // Find Product
    // const product = await Product.findByPk(req.params.productId)
    // Find User's order thats uncomplete
    const order = await Order.findOne({
      where: {
        completed: false,
        userId: req.params.userId
      },
      include: {model: Product}
    })
    // Make sure product is associated with order
    // const doesProdExist = await order.hasProduct(product)
    // if (doesProdExist && amount >= 0) {
    // Get association table row and increment count.
    let rowInThroughTable = await OrderProducts.findOne({
      where: {
        orderId: order.id,
        productId: req.params.productId
      }
    })
    rowInThroughTable.numberOfItems = amount
    // NEED TO UPDATE PRICE IN ORDERPROUDCTS TABLE BUT IS WORKING
    await rowInThroughTable.save()
    // }
    // Send all associated order and products
    res.json(rowInThroughTable)
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
