import React from 'react'
import { connect } from 'react-redux'

import { getUsers, addUser } from '../ducks/users'
import AppBar from './AppBar'
import Users from './Users'
import './App.css'

class App extends React.Component {
  componentWillMount () {
    this.props.getUsers()
    // created 125d075fe519aae02d5dc76b300c112729ecb473
  }
  render() {

    return (
      <div className="app-container">
        <AppBar />
        <div className="content-container">
          <Users
            users={this.props.users}
          />
          <h2>just one?</h2>
          <hr />
          <p>'n/a'</p>
        </div>
      </div>
    )
  }
}

// container
const mapState = ({ users }) => ({ users })
const mapDispatch = { addUser, getUsers }

export default connect(mapState, mapDispatch)(App)

// <h1 className="header">blockmate</h1>
// <hr className="bold-line"/>
