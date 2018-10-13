import React, { Component } from 'react';
import HeaderArea from './header/HeaderArea'
import HeroArea from './slide/HeroArea'
import MainWrapper from './main/MainWrapper'
import '../styles/style.css';

class App extends Component {
  render() {
    return (
          <div id="wrap" className="index_six">
            <HeaderArea/>
            <HeroArea/>
            <MainWrapper/>
          </div>
    );
  }
}

export default App;