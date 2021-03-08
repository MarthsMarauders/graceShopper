import React from 'react'
import {fetchAllUsers} from '../store/user'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class UserInfo extends React.Component {
  componentDidMount() {
    console.log('MOUNTED!!!!')
    this.props.fetchAllUsers()
  }

  render() {
    const {users} = this.props
    console.log('THIS IS USERS--->', users)
    return users ? (
      <div>
        {users.map(user => (
          <div key={user.id}>
            <h3>UserId: {user.id}</h3>
            <h1>UserEmail: {user.email}</h1>
            <h3>Admin: {user.isAdmin ? 'Admin' : 'NotAdmin'}</h3>
          </div>
        ))}
      </div>
    ) : null
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    users: state.user.users
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
