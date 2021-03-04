'use strict'
const {Op} = require('sequelize')
const db = require('../server/db')
const {User, Product, Order} = require('../server/db/models')
const {seeder} = require('./seeder')

async function seed() {
  await db.sync({force: true})
  const {cars, users} = seeder()
  await User.bulkCreate(users)
  await Product.bulkCreate(cars)
  const our5Admins = await User.findAll({
    where: {id: {[Op.lte]: 5}}
  })

  // Make 5 users an admin
  for (let admin of our5Admins) {
    await admin.flipAdmin().save()
  }

  // Get 10 users
  const our10UsersWithOrders = await User.findAll({
    where: {id: {[Op.between]: [10, 20]}}
  })

  // Create an Order for all 10 users
  for (let user of our10UsersWithOrders) {
    await user.createOrder()
  }

  // Find all orders
  const allOrders = await Order.findAll()

  // Find 10 Products
  const allProducts = await Product.findAll()

  // let randomInt = Math.round(Math.random() * 10)
  // let randomInt2 = Math.round(Math.random() * 10)
  // console.log('\n --------🚀 \n seed \n randomInt', randomInt, randomInt2)
  // function randomIndex() {
  //   let max = allProducts.length
  // }
  // Set random products to each order

  for (let order of allOrders) {
    await order.setProducts([
      allProducts[Math.round(Math.random() * 100)],
      allProducts[Math.round(Math.random() * 100)]
    ])
  }
  // await newOrder.setProducts([streetCleaver, chevy])
  // await secondOrder.setProducts(bmw)

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
