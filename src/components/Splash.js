import React from 'react'
import { Icon } from 'semantic-ui-react'

import './Splash.css'

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
            </div>
            <p className="description">Phasellus in orci non sapien porttitor aliquet facilisis sed metus. Morbi blandit tincidunt ipsum ut condimentum. Mauris a risus risus. Quisque nec purus nisl.  </p>
          </div>
          <div className="col-xs-4">
            <div className="box icon-header">
              <Icon name="payment" size="big" />
              <p>Open a wallet</p>
            </div>
            <p className="description">Fusce lobortis, justo ut vestibulum sagittis, ligula urna gravida lectus, sed luctus ligula magna in tortor. Duis euismod dignissim tortor, non interdum lectus eleifend et. Nullam scelerisque ipsum eu tincidunt ultrices. Proin posuere finibus augue, non venenatis nisi gravida ac. </p>
          </div>
          <div className="col-xs-4">
            <div className="box icon-header">
              <Icon name="cube" size="big" />
              <p>Send some ether</p>
            </div>
            <p className="description">Morbi pellentesque sem sed porta condimentum. Nam ante enim, faucibus ut magna ac, tempor lobortis libero. Donec vel urna enim. Sed aliquam nisl non libero egestas eleifend.</p>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}
// took the svg from aerapay
