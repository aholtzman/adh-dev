import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  height: 20vh;
  background-color: #F8F8F8;
  background-image: url(${require('../images/bgPattern.png')});
  color: black;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  img {
    width: 150px;
    height: 150px;
    padding: 10px;
    margin-top: 15px;
    filter: drop-shadow(1px 1px 1px #222);

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 800px) {
    img {
      width: 80px;
      height: 80px;
      padding: 5px;
    }
    height: 20vh;
  }
`

export default class Code extends Component {
  render() {
    return(
      <StyledDiv id='code'>
      <a href='https://www.instagram.com/adam.holtzman/' target='_blank' rel="noopener noreferrer">
        <img src={require('../images/instaIcon.png')} alt='instagram icon'/>
      </a>
      <a href='https://github.com/aholtzman' target='_blank' rel="noopener noreferrer">
        <img src={require('../images/github.png')} alt='github icon' />
      </a>
      <a href='mailto:adhdeveloper@gmail.com'>
        <img src={require('../images/email.png')}  alt='mail icon'/>
      </a>
      </StyledDiv>
    );
  }
}
