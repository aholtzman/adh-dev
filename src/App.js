import React, { Component } from 'react';
import Navbar from './components/Navbar'
import AppDiv from './components/AppDiv'
import Background from './components/Background'
import Portfolio from './components/Portfolio'
import Logo from './components/Logo'
import data from './images/data'
import About from './components/About'
import Connect from './components/Connect'


class App extends Component {
  render() {
    return (
      <AppDiv>
      <Background>
        <Logo>
          <img src={require('./images/adhSelf2.png')} alt='portrait'/>
          <h2>Adam Holtzman</h2>
        </Logo>
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
