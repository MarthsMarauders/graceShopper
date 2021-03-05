import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllProducts from './AllProducts'
import Cart from './Cart'
import {fetchCart} from '../store/cart'
/**
 * COMPONENT
 */
class UserHome extends Component {
  // componentDidMount() {
  //   console.log(this.props, 'PROPS!')
  //   this.props.getCart(this.props.user.id)
  //   // this.props.getOrder(this.props.user.id)
  //   // console.log(this.props.order.id, 'ORDER ID')
  //   // this.props.getCart(this.props.order.id)
  //   // this.forceUpdate();
  // }

  render() {
    const {email} = this.props
    const {user} = this.props
    console.log(user)
    return (
      <div>
        <h3>Welcome, {email}</h3>
        <div className="products-container">
          <Cart />
          {/* <AllProducts /> */}
        </div>
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
    user: state.user
  }
}

// const mapDispatchToProps = dispatch => ({
//   getCart: userId => {
//     dispatch(fetchCart(userId))
//   }
// })

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
