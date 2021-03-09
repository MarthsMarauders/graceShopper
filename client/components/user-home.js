import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllProducts from './AllProducts'
import Cart from './Cart'
import {fetchCart} from '../store/cart'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */
class UserHome extends Component {
  componentDidMount() {
    this.props.fetchCart(this.props.user.id)
  }
  render() {
    const {email, isAdmin} = this.props
    const {user} = this.props
    return (
      <div>
        <h3>
          Welcome, {email} / {isAdmin ? 'Admin' : 'Buyer'}
        </h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    isAdmin: state.user.isAdmin,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCart: userId => {
    dispatch(fetchCart(userId))
  }
})

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
