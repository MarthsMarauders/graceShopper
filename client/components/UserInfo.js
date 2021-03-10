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
    return users ? (
      <div className="user-div">
        {users.map(user => (
          <div key={user.id}>
            <ul className="list-group">
              <li className="list-group-item">UserId: {user.id}</li>
              <li className="list-group-item">UserEmail: {user.email}</li>
              <li className="list-group-item">
                Admin: {user.isAdmin ? 'Admin' : 'Not Admin'}
              </li>
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
