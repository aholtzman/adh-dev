import React, { Component } from 'react';
import Navbar from './components/Navbar'
import AppDiv from './components/AppDiv'
import Background from './components/Background'
import Portfolio from './components/Portfolio'
import data from './images/data'
import About from './components/About'
import Connect from './components/Connect'
import GreyLogo from './components/GreyLogo'


class App extends Component {
  render() {
    return (
      <AppDiv>
      <Background>
        <GreyLogo />
        <Navbar />
      </Background>
      <About />
      <Portfolio data={data} />
      <Connect id='code'/>
      </AppDiv>
    );
  }
}

export default App;
