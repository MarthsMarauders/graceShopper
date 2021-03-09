import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchCart,
  changeQuantityInCart,
  removeFromCart,
  checkout,
  addToCart
} from '../store/cart'
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
    this.deleteFromLocalCart = this.deleteFromLocalCart.bind(this)
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

    // if (this.props.cart.products && this.props.cart.products.length) {
    //   if (
    //     findNumberOfItems(this.props.cart.products) !==
    //     findNumberOfItems(prevProps.cart.products)
    //   ) {
    //     this.props.fetchCart(this.props.user.id)
    //   }
    // }
  }

  handleChange(event) {
    // if empty/null, dont do this
    if (!isNaN(parseInt(event.target.value))) {
      this.props.changeQuantityInCart(
        this.props.user.id,
        event.target.name,
        event.target.value
      )
    }
  }

  deleteFromLocalCart(product) {
    localStorage.removeItem(product.id)
    this.forceUpdate()
  }

  render() {
    let guestCart = getGuestItems(localStorage)
    if (this.props.user.id && this.props.cart.products) {
      const {user} = this.props
      guestCart.forEach(prod => {
        this.props.addToCart(user.id, prod.id, 1)
      })
      localStorage.clear()
      let arrayOfInCartItems = this.props.cart.products
      console.log(guestCart, 'ARRAY OF CART ITEMS')
      return (
        <div>
          <h1>Cart's Total Cost: ${totalPrice(arrayOfInCartItems) / 100}</h1>
          <h1>
            You have {findNumberOfItems(arrayOfInCartItems)} items in your cart!
          </h1>
          <Link to="/confirmation">
            <button
              className="checkout_buy"
              type="button"
              onClick={() => this.props.checkout(this.props.user.id)}
            >
              <h1> Buy Now </h1>
            </button>
          </Link>

          <div className="products-div">
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
                    defaultValue={product['Order-Products'].numberOfItems}
                    min="0"
                    max="200"
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
        </div>
      )
    } else {
      // add total price and number of items
      return (
        <div>
          {guestCart.map(product => (
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
                  onClick={() => this.deleteFromLocalCart(product)}
                >
                  Delete From Cart
                </button>
                {/* <input
                  type="number"
                  id="number"
                  defaultValue="1"
                  min="0"
                  max="200"
                  name={product.id}
                  onChange={this.handleChange}
                /> */}
              </Card>
            </div>
          ))}
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
  changeQuantityInCart: (userId, productId, amount) => {
    dispatch(changeQuantityInCart(userId, productId, amount))
  },
  removeItem: (userId, productId) => {
    dispatch(removeFromCart(userId, productId))
  },
  addToCart: (userId, productId, amount) =>
    dispatch(addToCart(userId, productId, amount)),
  checkout: userId => {
    dispatch(checkout(userId))
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

function totalPrice(productsArr) {
  let total = 0
  productsArr.forEach(prod => {
    total += prod['Order-Products'].numberOfItems * prod['Order-Products'].price
  })
  return total
}

function totalPriceForMergedCart(productsArr) {
  let total = 0
  productsArr.forEach(prod => {
    total += prod.price
  })
  return total
}

function getGuestItems(productsObj) {
  let guestCart = []
  Object.keys(productsObj).forEach(function(key) {
    guestCart.push(JSON.parse(productsObj.getItem(key)))
  })
  return guestCart
}

function makeMax(num) {
  if (num > 200) {
    num = 200
  }
  return num
}

// function deleteFromLocalCart(product) {
//   localStorage.removeItem(product.id)
//   this.setState({
//     guestCartChange: '+'
//   })
// }
