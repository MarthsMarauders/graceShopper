const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  time: {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  },

  shipped: {
    type: Sequelize.ENUM('shipped', 'delivered', 'pending')
  },

  totalPrice: {
    type: Sequelize.FLOAT
  }
})

module.exports = Order
