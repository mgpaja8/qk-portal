import React, { Component } from 'react';

import Header from './layout/Header';
import Navigation from './layout/Navigation';

class App extends Component{
  render(){
    return(
      <div className="app">
        <Navigation />
        <Header />
      </div>
    );
  }
}

export default App;
