import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { getUsers, addUser } from '../ducks/users'

class CreateUser extends React.Component {
  handleChange = event => {
    console.log(event.target.value)
  }
  render () {
    return (
      <div className="create-user content-container">
        <div className="row">
          <div className="col-xs-6">
            <h1>Create an account</h1>
            <hr />

            <div className="form-fields">
              <form method="POST">
                <TextField
                  id="text-field-controlled"
                  value="enter username"
                  floatingLabelText="username"
                  fullWidth={true}
                  onChange={this.handleChange}
                /><br />
                <TextField
                  id="text-field-controlled"
                  value="enter username"
                  floatingLabelText="password"
                  fullWidth={true}
                  onChange={this.handleChange}
                />
                <RaisedButton type="submit" label="sign up" className="button-submit" primary={true} fullWidth={true}/>
              </form>
            </div>

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
