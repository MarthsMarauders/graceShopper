const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Cart = require('./cart')

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

// 1 cart can have many products
Cart.hasMany(Product)
Product.belongsTo(Cart)

// user will have 1 cart
// cart will belong to 1 user

User.hasOne(Cart)
Cart.belongsTo(User)

//should be many to many
// Cart.belongsToMany(Product)
// Product.belongsToMany(Cart)

// 1 order can have many products
// Order.hasMany(Product)
// Product.belongsTo(Order)

// one to one cart and order
Cart.belongsTo(Order)
Order.hasOne(Cart)

console.log(Cart.prototype)
console.log('PRODUCTTTTTTT', Product.prototype)

module.exports = {
  User,
  Product,
  Order,
  Cart
}
