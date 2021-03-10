import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllProducts from './AllProducts'
import Cart from './Cart'
import {Link} from 'react-router-dom'

// Dummy Render component for the landing page
export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="products-container">
        <div className="brand-name-h1">
          <h1 className="brand-name"> Wheelin'Dealin' </h1>
          <p className="brand-p">We Sell HotWheels. Lots of HotWheels</p>
          <Link to="/products">
            <h1>See All Products</h1>{' '}
          </Link>
        </div>
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
