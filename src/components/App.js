import React from 'react'
import { connect } from 'react-redux'

import { getUsers, addUser } from '../ducks/users'

import Navbar from './Navbar'
import Content from './Content'
import './App.css'

class App extends React.Component {
  componentWillMount () {
    this.props.getUsers()
    // created 125d075fe519aae02d5dc76b300c112729ecb473
  }
  render() {

    return (
      <div className="app-container">
        <Navbar />
        <Content />
      </div>
    )
  }
}

// container
const mapState = ({ users }) => ({ users })
const mapDispatch = { addUser, getUsers }

export default connect(mapState, mapDispatch)(App)
