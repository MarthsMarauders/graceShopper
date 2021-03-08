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
      <div className="user-div">
        <h1>ALL USERS</h1>
        {users.map(user => (
          <div key={user.id}>
            <ul>
              <li>UserId: {user.id}</li>
              <li>UserEmail: {user.email}</li>
              <li>Admin: {user.isAdmin ? 'Admin' : 'NotAdmin'}</li>
            </ul>
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
