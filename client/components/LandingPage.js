import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllProducts from './AllProducts'
import Cart from './Cart'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */
export const LandingPage = () => {
  // const {email} = props

  return (
    <div>
      {/* <h3>Welcome, {email}</h3> */}
      <div className="products-container">
        <h1> HOME </h1>
        <Link to="/cart"> Cart </Link>

        {/* <Cart /> */}
        {/* <AllProducts /> */}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    ...state
  }
}

export default connect(mapState)(LandingPage)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
