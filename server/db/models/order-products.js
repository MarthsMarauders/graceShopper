const Sequelize = require('sequelize')
const db = require('../db')

const OrderProducts = db.define('Order-Products', {
  numberOfItems: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  totalPrice: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderProducts
