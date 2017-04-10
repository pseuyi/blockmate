import React from 'react'
import { connect } from 'react-redux'

import { getAll } from '../ducks/ether'
import { getWallet } from '../ducks/wallet'

class Wallets extends React.Component {
  // TODO: put this expensive request somewhere else
  componentWillMount () {
    this.props.getAll()
  }
  render () {
    const { ether } = this.props
    return (
      <div className="row wallets">
        <div className="col-xs-12 ">
          <div><h1>Address Book</h1></div>
          <br />
        </div>

        <div className="col-xs-12">
          <h2>Balance:</h2>
          {this.props.wallet[0] && this.props.wallet[0].balance}
          <p></p>
        </div>
        <div className="col-xs-12 unblocked centered">
          <div>
          <ul>
          {
            ether && ether.map(addr=>(
              <li key={addr} onClick={()=>{
                console.log('addr', addr)
                this.props.getWallet(addr)
              }}>{addr}</li>
            ))
          }
          </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ ether, wallet }) => ({ ether, wallet })
const mapDispatch = { getAll, getWallet }

export default connect(mapState, mapDispatch)(Wallets)
