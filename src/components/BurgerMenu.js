import React, { Component } from 'react';

class BurgerMenu extends Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false
    }
  }

  renderOpen() {
    return (
      <div className="burger-menu__open">
        <div className="burger-menu__menu">MENU</div>
      </div>
    );
  }

  render() {
    return (
      <div className="burger-menu">
        <div className="burger-menu__icon"></div>
        {this.state.isOpen && this.renderOpen()}
      </div>
    );
  }
}

export default BurgerMenu;
