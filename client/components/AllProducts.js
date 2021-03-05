import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/product'
import {Card} from 'react-bootstrap'
import {SingleProduct} from './SingleProduct'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */

class AllProducts extends Component {
  componentDidMount() {
    this.props.getProds()
    // this.forceUpdate();
  }

  render() {
    const {products} = this.props
    return (
      <div className="products-div">
        {products.map(product => (
          <div key={product.id}>
            <Card id="card" style={{width: '18rem'}} border="primary">
              <Link to={`/products/${product.id}`}>
                <Card.Img id="prod-img" variant="top" src={product.imageUrl} />
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
                Add to Cart
              </button>
            </Card>
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
  return {
    products: state.product.products
  }
}
const mapDispatchToProps = dispatch => ({
  getProds: () => {
    dispatch(fetchAllProducts())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)

function stars(rating) {
  let html
  if (rating === -1) {
    html = (
      <div>
        <p>No Ratings Yet!</p>
      </div>
    )
  }
  if (rating === 1) {
    html = (
      <div>
        <span className="fa fa-star checked"></span>
        <span id="unchecked" className="fa fa-star"></span>
        <span id="unchecked" className="fa fa-star"></span>
        <span id="unchecked" className="fa fa-star"></span>
        <span id="unchecked" className="fa fa-star"></span>
      </div>
    )
  }
  if (rating === 2) {
    html = (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span id="unchecked" className="fa fa-star"></span>
        <span id="unchecked" className="fa fa-star"></span>
        <span id="unchecked" className="fa fa-star"></span>
      </div>
    )
  }
  if (rating === 3) {
    html = (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span id="unchecked" className="fa fa-star"></span>
        <span id="unchecked" className="fa fa-star"></span>
      </div>
    )
  }
  if (rating === 4) {
    html = (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span id="unchecked" className="fa fa-star"></span>
      </div>
    )
  }
  if (rating === 5) {
    html = (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
      </div>
    )
  }
  return html
}
/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }

// <div key={product.id}>
//   <img src={product.imageUrl}></img>
//   <p> Name: {product.name} </p>
//   <p> Price: ${product.price} </p>
//   <p> rating: {product.rating} </p>
// </div>
