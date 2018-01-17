import React, { Component } from 'react';

import BurgerMenu from './BurgerMenu';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <BurgerMenu />
        <div className="header__header">
          <img className="header__img" src="./content/img/logo.png" alt="Quality Kitchen" />
        </div>
        <div className="header__user">User</div>
      </header>
    );
  }
}

export default Header;
