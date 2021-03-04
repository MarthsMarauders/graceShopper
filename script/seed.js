'use strict'

const {create} = require('react-test-renderer')
const db = require('../server/db')
const {User, Product, Order} = require('../server/db/models')
const {seeder} = require('./seeder')

async function seed() {
  await db.sync({force: true})
  const {cars} = seeder()
  await Product.bulkCreate(cars)
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'jimmydean4@gmail.com',
      password: '123',
      firstName: 'Mike',
      lastName: 'Busto',
      address: '15552 Main Street'
    }),
    User.create({
      email: 'MrPeanut555@gmail.com',
      password: '456',
      firstName: 'Peanut',
      lastName: 'Mister',
      address: '7651 Adobe Street'
    })
    // User.create({email: 'murphy@email.com', password: '123'}),
  ])

  // const products = await Promise.all([
  //   Product.create({
  //     name: 'tv',
  //     description: 'a tv the best',
  //     rating: 4,
  //     price: 129.99
  //   }),
  //   Product.create({
  //     name: 'shoe',
  //     description: 'the worst shoe',
  //     rating: 1,
  //     price: 1129.99
  //   }),
  //   Product.create({
  //     name: 'chair',
  //     description: 'a ok chair',
  //     rating: 3,
  //     price: 49.99
  //   })
  // ])

  // const orders = await Promise.all([
  //   Order.create({shipped: 'pending', totalPrice: 25}),
  //   Order.create({shipped: 'shipped', totalPrice: 69.99}),
  //   Order.create({shipped: 'pending', totalPrice: 89.5}),
  //   Order.create({shipped: 'delivered', totalPrice: 1345.55}),
  //  ])

  const user1 = await User.findByPk(1)
  const streetCleaver = await Product.findByPk(5)
  const chevy = await Product.findByPk(3)

  const newOrder = await Order.create()

  await user1.setOrders(newOrder)
  await newOrder.setProducts([streetCleaver, chevy])

  // const order = await Order.findByPk(1)
  // const user = await User.findByPk(1)

  // await user.setOrders(order)

  // const exampleCart = await Promise.all([
  //   Cart.create({
  //     totalItems: 2,
  //     totalPrice: 59.98,
  //     // productsList: ['chair', 'bed'],
  //   }),
  // ])

  // const cart = await Cart.findByPk(1)
  // // const order2 = await Order.findByPk(2)

  // const shoe = await Product.findByPk(2)
  // const chair = await Product.findByPk(3)
  // const tv = await Product.findByPk(1)

  // await cart.setProducts(shoe)
  // await cart.setProducts(chair)
  // await cart.setProducts(tv)

  // await cart.setOrder(order2)

  //   console.log(`seeded ${users.length} users`)
  //   console.log(`seeded successfully`)
  //
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
