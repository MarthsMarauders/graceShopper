const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  totalItems: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  totalPrice: {
    type: Sequelize.FLOAT
  },

  productsList: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  }
})

module.exports = Cart
