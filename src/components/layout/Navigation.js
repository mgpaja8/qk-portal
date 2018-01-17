import React, { Component } from 'react';
import { connect } from 'react-redux';

import Actions from '../../actions/action-types';

import Ionicon from 'react-ionicons';

class Navigation extends Component {
  constructor(props){
    super(props);

    this.handleIconCloseClick = this.handleIconCloseClick.bind(this);
  }

  handleIconCloseClick() {
    console.log('icon clicked');
    this.props.dispatch({
      type: Actions.CLOSE_NAVIGATION
    });
  }

  render() {
    let classname = "navigation";
    if(!this.props.navigation.isOpen){
      classname += " hidden"
    }

    return(
      <div className={classname}>
        <div className="navigation__header">
          <div className="navigation__text">Menu</div>
          <Ionicon icon="md-close" className="navigation__icon-close" onClick={this.handleIconCloseClick}/>    
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    navigation: state.navigation
  }
}

export default connect(mapStateToProps)(Navigation);
