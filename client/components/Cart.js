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
    // this.props.getOrder(this.props.user.id)
    // console.log(this.props.order.id, 'ORDER ID')
    // this.props.getCart(this.props.order.id)
    // this.forceUpdate();
  }

  render() {
    const {cart} = this.props
    console.log(cart)
    return (
      <div key={cart.id}>
        <div>Hello world</div>
        {cart.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    )
  }
}
/**
 * CONTAINER
 */
const mapStateToProps = state => {
  console.log(state, 'ORDERS STATE')
  return {
    // cart: state.cart.products,
    // user: state.user,
    // order: state.orders.order
    ...state
  }
}
const mapDispatchToProps = dispatch => ({
  getCart: orderId => {
    dispatch(fetchCart(orderId))
  },
  getOrder: userId => {
    dispatch(fetchOrder(userId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
