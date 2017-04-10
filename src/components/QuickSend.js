import React from 'react'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { send } from '../ducks/ether'

const style = {
  margin: 'auto',
  float: 'right'
}
const buttonStyle = {
  'borderRadius': 0,
}

class QuickSend extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
    let data = {
      user: event.target.name.value,
      password: event.target.password.value,
      toAddress: event.target.address.value,
      value: event.target.amount.value
    }
    this.props.send(data)
  }
  render () {
    return (
      <div className="row description">
        <div className="col-xs-12">
          <h1>Quick Send ABC</h1>
          <br />
        </div>
        <div className="col-xs-8 unblocked">
          <div>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="name"
                floatingLabelText="your username"
                fullWidth={true}
              /><br />
              <TextField
                name="password"
                floatingLabelText="your password"
                type="password"
                fullWidth={true}
              />
              <TextField
                name="address"
                floatingLabelText="send to this address"
                fullWidth={true}
              />
              <TextField
                name="amount"
                floatingLabelText="amount"
                fullWidth={true}
              />
              <p></p>
              <RaisedButton type="submit" label="Send" style={style} buttonStyle={buttonStyle} primary={true}/>
            </form>
          </div>
        </div>
        <div className="col-xs-4 blocked">
          <p className="description">Morbi pellentesque sem sed porta condimentum. Nam ante enim, faucibus ut magna ac, tempor lobortis libero. Donec vel urna enim. Sed aliquam nisl non libero egestas eleifend. Nullam scelerisque ipsum eu tincidunt ultrices. Proin posuere finibus augue, non venenatis nisi gravida ac.</p>
        </div>
      </div>
    )
  }
}
const mapState = null
const mapDispatch = { send }

export default connect(mapState, mapDispatch)(QuickSend)
