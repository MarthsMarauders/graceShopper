const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  time: {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  },

  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  totalPrice: {
    type: Sequelize.INTEGER
  }
})

module.exports = Order
