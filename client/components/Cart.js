import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {fetchOrder} from '../store/orders'

/**
 * COMPONENT
 */

class Cart extends Component {
  componentDidMount() {
    console.log(this.props, 'PROPS!')
    this.props.getCart(this.props.user.id)
    // this.props.getOrder(this.props.user.id)
    // console.log(this.props.order.id, 'ORDER ID')
    // this.props.getCart(this.props.order.id)
    // this.forceUpdate();
  }

  render() {
    const {cart} = this.props
    console.log(cart[0], 'CARPRODUCTS')
    return cart[0] ? (
      <div key={cart.id}>
        <div>Hello world</div>
        {cart[0].products.map(item => {
          // console.log(item)
          return (
            <div key={item.id}>
              <div>{item.price}</div>
              <div>{item.name}</div>
            </div>
          )
        })}
      </div>
    ) : null
  }
}
/**
 * CONTAINER
 */
const mapStateToProps = state => {
  console.log(state, 'ORDERS STATE')
  return {
    cart: state.cart.products,
    user: state.user
    // order: state.orders.order
  }
}

const mapDispatchToProps = dispatch => ({
  getCart: userId => {
    dispatch(fetchCart(userId))
  }
})
// const mapDispatchToProps = dispatch => ({
//   getCart: orderId => {
//     dispatch(fetchCart(orderId))
//   },
//   getOrder: userId => {
//     dispatch(fetchOrder(userId))
//   }
// })

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
