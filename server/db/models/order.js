const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  time: {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  },
  status: {
    type: Sequelize.ENUM('pending', 'completed'),
    defaultValue: 'pending'
  },

  totalPrice: {
    type: Sequelize.FLOAT
  }
})

module.exports = Order
