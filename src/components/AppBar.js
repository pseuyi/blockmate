import React from 'react'
import { grey50, darkBlack, grey300, white } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

// theme
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: white,
    textColor: darkBlack,
    alternateTextColor: darkBlack,
    borderColor: grey300
  },
  appBar: {
    height: 70,
  },
})

const Bar = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar
      title="Blockmate"
      iconClassNameLeft=""
      iconElementRight={<div><FlatButton label="blocks" /> <FlatButton label="users" /> <FlatButton label="about" /></div>}
    />
  </MuiThemeProvider>
)

export default Bar
