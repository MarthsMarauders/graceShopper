const Sequelize = require('sequelize')
const db = require('../db')

const OrderProducts = db.define('Order-Products', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  totalPrice: {
    type: Sequelize.INTEGER
  },
  individualPrice: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderProducts
