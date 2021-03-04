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
  ])

  const user1 = await User.findByPk(1)
  const streetCleaver = await Product.findByPk(5)
  const chevy = await Product.findByPk(3)

  const newOrder = await Order.create()

  await user1.setOrders(newOrder)
  await newOrder.setProducts([streetCleaver, chevy])
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
