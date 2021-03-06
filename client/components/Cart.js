import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {fetchOrder} from '../store/orders'

/**
 * COMPONENT
 */

class Cart extends Component {
  componentDidMount() {
    this.props.getCart(this.props.user.id)
    console.log('\n --------🚀 \n componentDidMount \n this.props', this.props)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render() {
    // const {cart} = this.props
    return (
      <div /*key={cart.id}*/>
        <div>Hello world</div>
        {/* {this.props.cart.map(item => (
          <div key={item.productId}>
            <h1>{item.price}</h1>
          </div>
        ))} */}
      </div>
    )
  }
}
/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    user: state.user

    // cart: state.cart.products
  }
}

const mapDispatchToProps = dispatch => ({
  getCart: userId => {
    dispatch(fetchCart(userId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
