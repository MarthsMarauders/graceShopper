'use strict'
const {Op} = require('sequelize')
const db = require('../server/db')
const {User, Product, Order, OrderProducts} = require('../server/db/models')
const {seeder} = require('./seeder')

async function seed() {
  // Overwrite DB
  await db.sync({force: true})
  // Pull in data from seeder
  const {cars, users} = seeder()
  // Bulk create
  await User.bulkCreate(users)
  await Product.bulkCreate(cars)
  // Find 5 admins
  const our5Admins = await User.findAll({
    where: {id: {[Op.lte]: 5}}
  })
  // Make 5 users an admin
  for (let admin of our5Admins) {
    await admin.flipAdmin().save()
  }
  // Get 15 users
  const userWithOrder = await User.findAll({
    where: {id: {[Op.between]: [20, 34]}}
  })
  // Create an Order for all 15 users
  for (let user of userWithOrder) {
    await user.createOrder()
  }
  // Find All Orders
  const allOrders = await Order.findAll()
  // Find 3 Products
  let product1 = await Product.findByPk(1)
  let product2 = await Product.findByPk(2)
  let product3 = await Product.findByPk(3)
  // Add 3 products to each order
  for (let order of allOrders) {
    // Add 3 prods
    await order.addProducts(product1)
    await order.addProducts(product2)
    await order.addProducts(product3)
    // Update price in row
    let row = await OrderProducts.findOne({
      where: {orderId: order.id}
    })
    row.price = product1.dataValues.price
    await row.save()
    // Update price in row
    let row2 = await OrderProducts.findOne({
      where: {orderId: order.id}
    })
    row2.price = product2.dataValues.price
    await row2.save()
    // Update price in row
    let row3 = await OrderProducts.findOne({
      where: {orderId: order.id}
    })
    row3.price = product3.dataValues.price
    await row3.save()
  }
  console.log('db synced!')
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
