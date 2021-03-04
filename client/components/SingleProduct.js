import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/product'
import {Card} from 'react-bootstrap'

/**
 * COMPONENT
 */

class SingleProduct extends Component {
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getSingleProd(id)
    // this.forceUpdate();
  }

  render() {
    const {product} = this.props
    return (
      <div key={product.id}>
        <Card style={{width: '18rem'}} border="primary">
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Price: {product.price}</Card.Text>
            <Card.Text> Description: {product.description}</Card.Text>
            <Card.Text>Rating: {product.rating}</Card.Text>
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
    product: state.product.product
  }
}
const mapDispatchToProps = dispatch => ({
  getSingleProd: id => {
    dispatch(fetchSingleProduct(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
