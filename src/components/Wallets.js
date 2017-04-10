import React from 'react'
import { connect } from 'react-redux'

import { getAll } from '../ducks/ether'
class Wallets extends React.Component {
  componentWillMount () {
    this.props.getAll()
  }
  render () {
    console.log('ether', this.props.ether)
    const { ether } = this.props
    return (
      <div className="row wallets">
        <div className="col-xs-12 ">
          <div><h1>Address Book</h1></div>
          <br />
        </div>
        <div className="col-xs-12 unblocked centered">
          <div>
          <ul>
          {
            ether && ether.map(addr=>(
              <li key={addr}>{addr}</li>
            ))
          }
          </ul>
          </div>

        </div>
      </div>
    )
  }
}

const mapState = ({ ether }) => ({ ether })
const mapDispatch = { getAll }

export default connect(mapState, mapDispatch)(Wallets)
