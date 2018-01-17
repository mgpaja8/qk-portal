import React, { Component } from 'react';
import { connect } from 'react-redux';

import Actions from '../../actions/action-types';

import Ionicon from 'react-ionicons';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleIconMenuClick = this.handleIconMenuClick.bind(this);
  }

  handleIconMenuClick() {
    this.props.dispatch({
      type: Actions.OPEN_NAVIGATION
    });
  }

  render() {
    console.log(this.props);
    return (
      <header className="header">
        <Ionicon icon="md-menu" className="header__icon-menu" onClick={this.handleIconMenuClick}/>
        <img className="header__img" src="./content/img/logo.png" alt="Quality Kitchen" />
        <div className="header__user">User</div>
      </header>
    );
  }
}

export default connect()(Header);
