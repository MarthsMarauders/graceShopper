import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, getCart} from '../store/cart'
import {fetchOrder} from '../store/orders'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {stars} from './AllProducts'
/**
 * COMPONENT
 */

class Cart extends Component {
  componentDidMount() {
    this.props.fetchCart(this.props.user.id)
  }
  componentDidUpdate(prevProps) {
    if (this.props.user.id !== prevProps.user.id) {
      this.props.fetchCart(this.props.user.id)
    }
    if (this.props.cart.id !== prevProps.cart.id) {
      this.props.fetchCart(this.props.user.id)
    }
  }
  render() {
    if (this.props.cart[0]) {
      let arrayOfInCartItems = this.props.cart[0].products
      return (
        <div /*key={cart.id}*/>
          <div>Hello world</div>
          {arrayOfInCartItems.map(product => (
            <div key={product.id}>
              <Card id="card" style={{width: '18rem'}} border="primary">
                <Link to={`/products/${product.id}`}>
                  <Card.Img
                    id="prod-img"
                    variant="top"
                    src={product.imageUrl}
                  />
                  <Card.Title>{product.name}</Card.Title>
                </Link>
                <Card.Body>
                  <Card.Text>${product.price / 100}</Card.Text>
                  <Card.Text> Description: {product.description}</Card.Text>
                </Card.Body>
                <div>Rating: {stars(product.rating)}</div>
                <button
                  className="add-to-cart"
                  type="button"
                  // onClick={() => this.props.addToCart(product)}
                >
                  Change Quantity {product.numberOfItems}
                </button>
              </Card>
            </div>
          ))}

          {/* {arrayOfInCartItems.map(item => (
            <div key={item.id}>
              <h1>{item.price}</h1>
              <h1>{item.name}</h1>
            </div>
          ))} */}
        </div>
      )
    } else {
      return (
        <div>
          <p>noffin</p>
        </div>
      )
    }
  }
}
/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    ...state,
    cart: state.cart.products
    // user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCart: userId => {
    dispatch(fetchCart(userId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
