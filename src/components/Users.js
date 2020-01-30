import React, { Component } from 'react';
import {connect} from "react-redux"
// add any needed imports here
class Users extends Component {

  render() {
    let fudge = this.props.users.map(user => <li>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {fudge}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return {users: state.users}

}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
