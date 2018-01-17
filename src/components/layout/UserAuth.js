import React, { Component } from 'react';

import Ionicon from 'react-ionicons';

class UserAuth extends Component {
  constructor(props){
    super(props);

    this.handleLoginOnClick = this.handleLoginOnClick.bind(this);
  }

  handleLoginOnClick(){
    console.log('login clicked');
  }

  render() {
    return (
      <div className="userAuth" onClick={this.handleLoginOnClick}>
        <Ionicon icon="md-person" className="userAuth__icon-person" />
        <div className="userAuth__text">Login</div>
      </div>
    );
  }
}

export default UserAuth;
