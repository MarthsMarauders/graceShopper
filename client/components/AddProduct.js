import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import validator from 'validator'

import {createNewProduct} from '../store/product'
const defaultState = {}
class AddProduct extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      price: '',
      rating: '',
      image: '',
      validationError: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  validation() {
    let isFormValid = true
    let validationError = {}

    if (!this.state.name) {
      isFormValid = false
      validationError.name = ' Must Enter Field'
    }
    if (!this.state.description) {
      isFormValid = false
      validationError.name = ' Must Enter Field'
    }
    if (!this.state.price) {
      isFormValid = false
      validationError.name = ' Must Enter Field'
    }
    if (!this.state.rating) {
      isFormValid = false
      validationError.name = ' Must Enter Field'
    }
    this.setState({validationError: validationError})
    return isFormValid
  }

  handleSubmit(evt) {
    evt.preventDefault()
    if (this.validation()) {
      this.props.createProduct({...this.state})
      this.setState(defaultState)
    }
  }

  render() {
    const {
      name,
      price,
      description,
      rating,
      image,
      validationError
    } = this.state
    const {handleSubmit, handleChange} = this

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name:</label>
        <input
          name="name"
          onChange={handleChange}
          placeholder={validationError.name}
          value={name}
        />

        <label htmlFor="description">Description:</label>
        <input
          name="description"
          onChange={handleChange}
          placeholder={validationError.name}
          value={description}
        />

        <label htmlFor="price">Price:</label>
        <input
          name="price"
          onChange={handleChange}
          placeholder={validationError.name}
          value={price}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          name="rating"
          onChange={handleChange}
          placeholder={validationError.name}
          value={rating}
        />

        <label htmlFor="image">Image:</label>
        <input name="image" onChange={handleChange} value={image} />

        <button type="submit">Submit</button>
        <Link to="/products">Cancel</Link>
      </form>
    )
  }
}
const mapDispatch = dispatch => {
  return {
    createProduct: product => dispatch(createNewProduct(product))
  }
}

export default connect(null, mapDispatch)(AddProduct)
