import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, changeQuantityInCart} from '../store/cart'
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

  handleChange(event) {
    this.props.changeQuant(
      this.props.user.id,
      event.target.name,
      event.target.value
    )
  }

  render() {
    if (this.props.cart[0]) {
      console.log(
        this.props.cart[0].products[0]['Order-Products'].numberOfItems,
        'CART HERE IN THERE'
      )
    }
    if (this.props.cart[0]) {
      let arrayOfInCartItems = this.props.cart[0].products
      return (
        <div /*key={cart.id}*/>
          <div>Hello world</div>
          {arrayOfInCartItems.map((product, index) => (
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
                <div
                  className="value-button"
                  id="decrease"
                  // onClick="decreaseValue()"
                  value="Decrease Value"
                >
                  -
                </div>
                <input
                  type="number"
                  id="number"
                  value={
                    this.props.cart[0].products[index]['Order-Products']
                      .numberOfItems
                  }
                  name={product.id}
                  onChange={this.handleChange}
                />
                <div
                  className="value-button"
                  id="increase"
                  // onClick="increaseValue()"
                  value="Increase Value"
                >
                  +
                </div>
                <button className="add-to-cart" type="button">
                  Change Quantity {product.numberOfItems}
                </button>
                <button
                  className="add-to-cart"
                  type="button"
                  // onClick={() => this.props.addToCart(product)}
                >
                  Delete From Cart {product.numberOfItems}
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
