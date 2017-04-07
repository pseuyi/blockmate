import React from 'react'
import { Icon } from 'semantic-ui-react'
import RaisedButton from 'material-ui/RaisedButton'
import { amber500 } from 'material-ui/styles/colors'

import './Splash.css'

const style = {
  margin: 0,
}
const buttonStyle = {
  'borderRadius': 0,
}

export default class extends React.Component {
  render () {
    return (
      <div className="splash">
        <img id="skyline" src="https://app.aerapay.com/img/svgs/skyline.svg" alt="skyline" />
        <hr />
        <h1>Getting started</h1>
        <div className="row description">
          <div className="col-xs-4">
            <div className="box icon-header">
              <Icon name="users" size="big" />
              <p>Create your account</p>
              <hr />
            </div>
            <p className="description">Phasellus in orci non sapien porttitor aliquet facilisis sed metus. Morbi blandit tincidunt ipsum ut condimentum. Mauris a risus risus. Quisque nec purus nisl.  </p>
            <RaisedButton label="Create" style={style} buttonStyle={buttonStyle} primary={true} fullWidth={true}/>
          </div>
          <div className="col-xs-4">
            <div className="box icon-header">
              <Icon name="payment" size="big" />
              <p>Open a wallet</p>
              <hr />
            </div>
            <p className="description">Fusce lobortis, justo ut vestibulum sagittis, ligula urna gravida lectus, sed luctus ligula magna in tortor. Duis euismod dignissim tortor, non interdum lectus eleifend et. Nullam scelerisque ipsum eu tincidunt ultrices. Proin posuere finibus augue, non venenatis nisi gravida ac. </p>
            <RaisedButton label="Open" style={style} buttonStyle={buttonStyle} primary={true} fullWidth={true}/>
          </div>
          <div className="col-xs-4">
            <div className="box icon-header">
              <Icon name="cube" size="big" />
              <p>Send some ether</p>
              <hr />
            </div>
            <p className="description">Morbi pellentesque sem sed porta condimentum. Nam ante enim, faucibus ut magna ac, tempor lobortis libero. Donec vel urna enim. Sed aliquam nisl non libero egestas eleifend.</p>
            <RaisedButton label="Send" style={style} buttonStyle={buttonStyle} primary={true} fullWidth={true}/>
          </div>
        </div>
      </div>
    )
  }
}
// stole the svg from aerapay
