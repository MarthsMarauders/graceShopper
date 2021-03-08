import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, changeQuantityInCart, removeFromCart} from '../store/cart'
import {fetchOrder} from '../store/orders'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {stars} from './AllProducts'
/**
 * COMPONENT
 */

class Cart extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    if (this.props.user.id) this.props.fetchCart(this.props.user.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.user.id !== prevProps.user.id) {
      this.props.fetchCart(this.props.user.id)
    }
    if (this.props.cart.id !== prevProps.cart.id) {
      this.props.fetchCart(this.props.user.id)
    }
    console.log(
      this.props.cart.products,
      'THSI IS THE CART',
      prevProps.cart.products,
      'THIS IS THE PREV PROPS'
    )
    if (this.props.cart.products && prevProps.cart.products) {
      if (this.props.cart.products.length !== prevProps.cart.products.length) {
        this.props.fetchCart(this.props.user.id)
      }
    }
  }

  handleChange(event) {
    this.props.changeQuant(
      this.props.user.id,
      event.target.name,
      event.target.value
    )
  }

  render() {
    if (this.props.cart.products) {
      let arrayOfInCartItems = this.props.cart.products
      return (
        <div>
          <div>Cart's Total Cost: ${this.props.cart.totalPrice / 100}</div>
          <div>
            You have {findNumberOfItems(this.props.cart.products)} items in your
            cart!
          </div>
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
                {/* <div
                  className="value-button"
                  id="decrease"
                  // onClick="decreaseValue()"
                  value={product['Order-Products'].numberOfItems}
                  name={product.id}
                  onClick={this.handleChange}
                >
                  -
                </div> */}
                <input
                  type="number"
                  id="number"
                  value={product['Order-Products'].numberOfItems}
                  name={product.id}
                  onChange={this.handleChange}
                />
                {/* <div
                  className="value-button"
                  id="increase"
                  // onClick="increaseValue()"
                  value={product['Order-Products'].numberOfItems}
                  name={product.id}
                  onClick={this.handleChange}
                >
                  +
                </div> */}
                <button
                  className="add-to-cart"
                  type="button"
                  onClick={() =>
                    this.props.removeItem(this.props.user.id, product.id)
                  }
                >
                  Delete From Cart
                </button>
              </Card>
            </div>
          ))}
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
    cart: state.cart.products,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCart: userId => {
    dispatch(fetchCart(userId))
  },
  changeQuant: (userId, productId, amount) => {
    dispatch(changeQuantityInCart(userId, productId, amount))
  },
  removeItem: (userId, productId) => {
    dispatch(removeFromCart(userId, productId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

function findNumberOfItems(productsArr) {
  let num = 0
  productsArr.forEach(prod => {
    num += prod['Order-Products'].numberOfItems
  })
  return num
}
