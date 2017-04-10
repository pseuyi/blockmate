import React from 'react'
import { Icon } from 'semantic-ui-react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 'auto',
  float: 'right'
}
const buttonStyle = {
  'borderRadius': 0,
}

export default class extends React.Component {
  render () {
    return (
      <div className="row description">
        <div className="col-xs-12">
          <h1>Quick Send ABC</h1>
          <br />
        </div>
        <div className="col-xs-8 unblocked">
          <div>
            <p className="description">Fusce lobortis, justo ut vestibulum sagittis, ligula urna gravida lectus, sed luctus ligula magna in tortor. Duis euismod dignissim tortor, non interdum lectus eleifend et.</p>
            <p className="description">Fusce lobortis, justo ut vestibulum sagittis, ligula urna gravida lectus, sed luctus ligula magna in tortor. Duis euismod dignissim tortor, non interdum lectus eleifend et.</p>
            <RaisedButton label="Do this thing" style={style} buttonStyle={buttonStyle} primary={true}/>
          </div>
        </div>
        <div className="col-xs-4 blocked">
          <p className="description">Morbi pellentesque sem sed porta condimentum. Nam ante enim, faucibus ut magna ac, tempor lobortis libero. Donec vel urna enim. Sed aliquam nisl non libero egestas eleifend. Nullam scelerisque ipsum eu tincidunt ultrices. Proin posuere finibus augue, non venenatis nisi gravida ac.</p>
        </div>
      </div>
    )
  }
}
