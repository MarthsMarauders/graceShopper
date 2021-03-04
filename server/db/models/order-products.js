const Sequelize = require('sequelize')
const db = require('../db')

const OrderProducts = db.define('Order-Products', {
  numberOfItems: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  price: {
    type: Sequelize.INTEGER
  }
  // setterMethods: {
  //   setPrice(value) {
  //     // Note: this is just for demonstration.
  //     // See: https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/
  //     this.setDataValue('price', value)
  //   }
  // }
})

module.exports = OrderProducts
