import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllProducts from './AllProducts'
import Cart from './Cart'
import {Link} from 'react-router-dom'

// Dummy Render component for the landing page
export const LandingPage = () => {
  return (
    <div>
      <div className="products-container">
        <h1> LandingPage </h1>
        <Link to="/products">
          {' '}
          <h1>See All Products</h1>{' '}
        </Link>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    state
  }
}
export default connect(mapState)(LandingPage)
