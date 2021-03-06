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

module.exports = {
  User,
  Product,
  Order,
  OrderProducts
}
