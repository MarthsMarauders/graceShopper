import React, {Component} from 'react'
import PropTypes from 'prop-types'
import history from '../history'
import {connect} from 'react-redux'
import {fetchSingleProduct, updateAProduct} from '../store/product'
import {Card, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */

class EditProduct extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      price: '',
      rating: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getSingleProd(id)

    // this.forceUpdate();
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    this.props.updateProduct({
      ...this.props.product,
      ...this.state
    })
  }

  render() {
    const {product} = this.props
    const {name, description, price, rating} = this.state

    const {handleSubmit, handleChange} = this
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Product Name:</label>
          <input name="name" onChange={handleChange} value={name} />

          <label htmlFor="description"> Description:</label>
          <input
            name="description"
            onChange={handleChange}
            value={description}
          />

          <label htmlFor="price">Price:</label>
          <input name="price" onChange={handleChange} value={price} />

          <label htmlFor="rating">Rating:</label>
          <input name="rating" onChange={handleChange} value={rating} />

          <button type="submit">Submit</button>
          <Link to="/products">Cancel</Link>
        </form>

        {/* <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Product</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Quantity</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form> */}
        {/* <form onSubmit={ev => ev.preventDefault()} /> */}
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
  },
  updateProduct: product => dispatch(updateAProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
