import React from 'react'

import Splash from './Splash'

export default class extends React.Component {
  render () {
    const {users} = this.props
    return (
      <div className="content-container">
        <Splash />
      </div>
    )
  }
}

// <Users
//   users={this.props.users}
// />
// <h2>just one?</h2>
// <hr />
// <p>'n/a'</p>
