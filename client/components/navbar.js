import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {me} from '../store/user'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAdmin: this.props.user.isAdmin
    }
  }

  componentDidMount() {
    this.props.fetchUser()
  }
  render() {
    const {handleClick, isLoggedIn} = this.props
    console.log(this.props.user.isAdmin)
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1 className="navbar-brand" href="#">
            Wheelin' Dealin'
          </h1>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/home">Home</Link>
              <Link to="/products">All Products</Link>
              <Link to="/cart">My Cart</Link>
              <Link className="admin-links" to="/users">
                All Users
              </Link>
              <a
                href="/orders"
                className={
                  this.state.isAdmin ? 'admin-links-hidden' : 'admin-links'
                }
              >
                All Orders
              </a>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/products">Products</Link>
              <Link to="/cart">My Cart</Link>
            </div>
          )}
        </nav>
        <hr />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    ...state,
    isLoggedIn: !!state.user.id
    // user: state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    fetchUser: () => dispatch(me())
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
