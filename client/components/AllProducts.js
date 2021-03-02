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
    return products.length ? (
      <div>
        {products.map(product => (
          <div key={product.id}>
            <Card style={{width: '18rem'}} border="primary">
              <Link to={`/products/${product.id}`}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Title>{product.name}</Card.Title>
              </Link>
              <Card.Body>
                <Card.Text>Price: {product.price}</Card.Text>
                <Card.Text> Description: {product.description}</Card.Text>
                <Card.Text>Rating: {product.rating}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    ) : null
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
