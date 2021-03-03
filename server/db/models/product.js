const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'https://bitsofco.de/content/images/2018/12/broken-1.png'
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 5
    },
    defaultValue: -1
  },
  price: {
    type: Sequelize.FLOAT
  }
})

module.exports = Product
