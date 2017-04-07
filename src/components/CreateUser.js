import React from 'react'
import { connect } from 'react-redux'

import { getUsers, addUser } from '../ducks/users'

class CreateUser extends React.Component {
  render () {
    return (
      <div className="create-user">
        <h2>Create an account page</h2>
      </div>
    )
  }
}

const mapState = ({ users }) => ({ users })
const mapDispatch = { addUser, getUsers }

export default connect(mapState, mapDispatch)(CreateUser)
