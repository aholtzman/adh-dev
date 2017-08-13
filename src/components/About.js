import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: white;
  height: 100vh;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #303030;
  overflow: scroll;

  a {
    text-decoration: none;
    color: black;
  }

  p {
    line-height: 180%;
  }
`

const TextDiv = styled.div`
  width: 70%;
  margin: auto 0;
`
export default class About extends Component {
  render() {
    return(
      <StyledDiv id='about'>
        <TextDiv>
          <p>Adam Holtzman has been designing and building his own websites as well as for friends since 2002. In late 2016 he decided to focus on making this a profession and began learning to write the code rather than use visual programs (Adobe's GoLive & later Muse) to develop sites. He has focused recently on developing with React, has been utilizing CSS in JS with Styled-Components and innovative designs with CSS Grid.</p>
          <p>Adam is a former chef, an art dealer, exhibiting artist (photography and painting) and has been active in producing photography and art books; designing, editing and occasionally publishing many since 2007. His artwork can be seen at <a href='http://www.adamholtzman.com' >adamholtzman.com</a></p>
        </TextDiv>
      </StyledDiv>
    );
  }
}
