import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { grey50, teal800, darkBlack, white } from 'material-ui/styles/colors'

import { getUsers, addUser } from '../ducks/users'
import Navbar from './Navbar'
import Splash from './Splash'
import './App.css'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal800,
    textColor: darkBlack,
    alternateTextColor: white,
    borderColor: grey50
  },
  fontFamily: 'graphik, sans-serif',
})

class App extends React.Component {
  componentWillMount () {
    this.props.getUsers()
    // created 125d075fe519aae02d5dc76b300c112729ecb473
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app-container">
          <Navbar />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

// container
const mapState = ({ users }) => ({ users })
const mapDispatch = { addUser, getUsers }

export default connect(mapState, mapDispatch)(App)
