import React from 'react'
import { connect } from 'react-redux'

import { getUsers, addUser } from '../ducks/users'

class CreateUser extends React.Component {
  render () {
    return (
      <div className="create-user content-container">
        <div className="row">
          <div className="col-xs-6">
            <h1>Create an account</h1>
            <hr />
          </div>
          <div className="col-xs-6">
            <h1>Your unique id</h1>
            <hr />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ users }) => ({ users })
const mapDispatch = { addUser, getUsers }

export default connect(mapState, mapDispatch)(CreateUser)
