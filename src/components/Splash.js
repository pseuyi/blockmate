import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

import Steps from './Steps'
import './Splash.css'

const style = {
  'fontSize': '20px',
  'margin': 'auto',
  'display': 'block',
  'padding': '0',
  'width': '340px',
  'height': '54px',

}
const buttonStyle = {
  'display': 'inline-block',
  'verticalAlign': 'middle',
  'borderRadius': 0,
}

const labelStyle = {
  'position': 'absolute',
  'top': 0,
  'bottom': 0,
  'left': 0,
  'right': 0,
  'padding': '18px 0',
  'verticalAlign': 'middle'
}

export default class extends React.Component {
  render () {
    return (
      <div className="row splash">
        <div className="col-xs-12">
          <img id="skyline" src="https://app.aerapay.com/img/svgs/skyline.svg" alt="skyline" />
          <hr id="underline" />
          <h1>A Simple Way To Send & Receive Ether</h1>
          <h3>Per congue consulatu pertinacia eu, modus fabellas vituperata et qui, aeque euismod efficiantur in est. Cum saperet incorrupte no.</h3>
          <RaisedButton label="Get Started" style={style} buttonStyle={buttonStyle} labelStyle={labelStyle} primary={true} containerElement={<Link to="/create"/>}/>
        </div>
      </div>
    )
  }
}
// stole the svg from aerapay
