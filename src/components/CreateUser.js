import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import User from './User'
import { addUser } from '../ducks/user'

class CreateUser extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
    let user = {
      name: event.target.name.value,
      faucet: "1",
      password: event.target.password.value // encryption?
    }
    this.props.addUser(user)
  }
  render () {
    const { user } = this.props
    return (
      <div className="create-user content-container">
        <div className="row">
          <div className="col-xs-6">
            <h1>Create an account</h1>
            <hr />

            <div className="bordered">
              <form onSubmit={this.handleSubmit}>
                <TextField
                  name="name"
                  floatingLabelText="username"
                  fullWidth={true}
                /><br />
                <TextField
                  name="password"
                  floatingLabelText="password"
                  type="password"
                  fullWidth={true}
                />
                <p></p>
                <RaisedButton type="submit" label="sign up" className="button-submit" primary={true} fullWidth={true}/>
              </form>
            </div>

          </div>
          <div className="col-xs-6">
            <h1>Profile</h1>
            <hr />
            <User />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ user }) => ({ user }) // TODO: refactor container to non container
const mapDispatch = { addUser }

export default connect(mapState, mapDispatch)(CreateUser)
