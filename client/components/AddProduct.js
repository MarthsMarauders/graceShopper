import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {createNewProduct} from '../store/product'

class AddProduct extends Component {
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

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.createProduct({...this.state})
  }

  render() {
    const {name, price, description, rating} = this.state
    const {handleSubmit, handleChange} = this

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name:</label>
        <input name="name" onChange={handleChange} value={name} />

        <label htmlFor="description">Description:</label>
        <input name="description" onChange={handleChange} value={description} />

        <label htmlFor="price">Price:</label>
        <input name="price" onChange={handleChange} value={price} />

        <label htmlFor="rating">rating:</label>
        <input name="rating" onChange={handleChange} value={rating} />

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
