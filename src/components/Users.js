import React from 'react'

export default class extends React.Component {
  render () {
    const {users} = this.props
    return (
      <div className="users">
        <h2>users</h2>
        <hr />
        <p>{JSON.stringify(users)}</p>
      </div>
    )
  }
}
