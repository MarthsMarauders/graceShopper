import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllProducts from './AllProducts'
import Cart from './Cart'
/**
 * COMPONENT
 */

export const UserHome = props => {
  const {email} = props
  // console.log(this.props)

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <div className="products-container">
        <h1> HOME </h1>
        <Cart />
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
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
