import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map((u, i) => <li key={i}>{u.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {console.log(this.props.users)}
          {users}<br />
          {this.props.users.length}<br />
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}


// connect this component to Redux
export default connect(mapStateToProps)(Users)
