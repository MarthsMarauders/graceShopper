import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {fetchOrder} from '../store/orders'

/**
 * COMPONENT
 */

class Cart extends Component {
  componentDidMount() {
    console.log(this.props.match.params)
    this.props.getCart(this.props.match.params.id)
    // this.props.getOrder(this.props.user.id)
    // console.log(this.props.order.id, 'ORDER ID')
    // this.props.getCart(this.props.order.id)
    // this.forceUpdate();
  }

  render() {
    // const {cart} = this.props
    console.log(
      this.props.cart,
      '\n\n\nim this . props in render in cart \n\n\n'
    )
    return (
      <div /*key={cart.id}*/>
        <div>Hello world</div>
        {this.props.cart.map(item => (
          <div key={item.productId}>
            <h1>{item.price}</h1>
          </div>
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
    ...state,
    cart: state.cart.products
    // user: state.user,
    // order: state.orders.order
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
