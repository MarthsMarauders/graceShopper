import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {fetchOrder} from '../store/orders'

/**
 * COMPONENT
 */

class Cart extends Component {
  componentDidMount() {
    console.log(this.props.user.id, 'THIS>PROPS>USER>ID')
    this.props.getCart(this.props.user.id)
  }

  render() {
    const {cart} = this.props
    return cart[0] ? (
      <div key={cart.id}>
        {/* <div>Hello world</div> */}
        {cart[0].products.map(item => {
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
  return {
    cart: state.cart.products,
    user: state.user
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
