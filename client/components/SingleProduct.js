import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/product'
import {Card} from 'react-bootstrap'
import {addToCart} from '../store/cart'
import {stars, addToLocalCart} from './AllProducts'
/**
 * COMPONENT
 */

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getSingleProd(id)
  }

  handleChange(event) {
    // if empty/null, dont do this
    if (!isNaN(parseInt(event.target.value))) {
      this.setState({
        amount: event.target.value
      })
    }
  }

  render() {
    const {product, user} = this.props
    const {amount} = this.state
    return (
      <div key={product.id}>
        <Card style={{width: '18rem'}} border="primary">
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Price: ${product.price / 100}</Card.Text>
            <Card.Text> Description: {product.description}</Card.Text>
            <Card.Text>Rating: {stars(product.rating)}</Card.Text>
            <input
              type="number"
              id="number"
              defaultValue="1"
              min="0"
              max="200"
              name={product.id}
              onChange={this.handleChange}
            />
            <button
              className="add-to-cart"
              type="button"
              onClick={
                user.id
                  ? () => this.props.addToCart(user.id, product.id, amount)
                  : () => addToLocalCart(product)
              }
            >
              Add to Cart
            </button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    ...state,
    product: state.product.product
  }
}

const mapDispatchToProps = dispatch => ({
  getSingleProd: id => dispatch(fetchSingleProduct(id)),
  addToCart: (userId, productId, amount) =>
    dispatch(addToCart(userId, productId, amount))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
