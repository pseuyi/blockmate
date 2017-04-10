import React from 'react'

import Splash from './Splash'
import Steps from './Steps'
import QuickSend from './QuickSend'
import Wallets from './Wallets'

export default class extends React.Component {
  render () {
    return (
      <div className="content-container">
        <Splash />
        <Steps />
        <QuickSend />
        <Wallets />
      </div>
    )
  }
}

//TODO: refactor into container
