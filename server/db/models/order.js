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

Order.prototype.flipStatus = function() {
  this.completed = !this.completed
  return this
}

module.exports = Order
