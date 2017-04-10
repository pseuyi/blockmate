import React from 'react'
import { connect } from 'react-redux'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

class User extends React.Component {
  render () {
    const style = {
      padding: "4rem 8rem",
      transform: "rotateY(-180deg) rotate(90deg)"
    }
    let el = (<div><p>you don't have an account!</p><img src="images/right-up-arrow.png" id="arrow" style={style}/></div>)
    const { user } = this.props
    if(user.name) {
      el = (
        <div className="bordered">
          <p>name: {user.name}</p>
          <p>address: {user.address}</p>
        </div>
      )
    }
    if(user.msg) {
      el = (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>{user.msg}</Loader>
          </Dimmer>
          <Image src='images/paragraph.png' />
        </Segment>
      )
    }
    return (
      <div>
      {el}
      </div>
    )
  }
}

const mapState = ({ user }) => ({ user })
const mapDispatch = null

export default connect(mapState, mapDispatch)(User)
