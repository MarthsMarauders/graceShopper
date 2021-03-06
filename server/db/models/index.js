const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const OrderProducts = require('./order-products')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 *
 */

// 1 to many
User.hasMany(Order)
Order.belongsTo(User)

//many to many
Product.belongsToMany(Order, {through: OrderProducts})
Order.belongsToMany(Product, {through: OrderProducts})

// console.log(User.prototype)
// console.log('PRODUCT MAGIC METHOD', Product.prototype)
// console.log('USER MAGIC METHOD', User.prototype)
// console.log('Order MAGIC METHOD', Order.prototype)
// console.log('Product MAGIC METHOD', Product.prototype)
// console.log('Product MAGIC METHOD', OrderProducts.prototype)

const productModel = Product
console.log('\n\nProduct model can use:\n\n')
for (let assoc of Object.keys(productModel.associations)) {
  for (let accessor of Object.keys(
    productModel.associations[assoc].accessors
  )) {
    console.log(
      productModel.name +
        '.' +
        productModel.associations[assoc].accessors[accessor] +
        '()'
    )
  }
}
const orderModel = Order
console.log('\n\nOrder model can use:\n\n')
for (let assoc of Object.keys(orderModel.associations)) {
  for (let accessor of Object.keys(orderModel.associations[assoc].accessors)) {
    console.log(
      orderModel.name +
        '.' +
        orderModel.associations[assoc].accessors[accessor] +
        '()'
    )
  }
}

const userModel = User
console.log('\n\n User model can use:\n\n')
for (let assoc of Object.keys(userModel.associations)) {
  for (let accessor of Object.keys(userModel.associations[assoc].accessors)) {
    console.log(
      userModel.name +
        '.' +
        userModel.associations[assoc].accessors[accessor] +
        '()'
    )
  }
}

module.exports = {
  User,
  Product,
  Order,
  OrderProducts
}
