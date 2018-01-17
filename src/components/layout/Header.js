import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Ionicon icon="md-menu" className="header__icon" />
        <img className="header__img" src="./content/img/logo.png" alt="Quality Kitchen" />
        <div className="header__user">User</div>
      </header>
    );
  }
}

export default Header;
