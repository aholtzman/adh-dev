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
    color: #d9d9d9;
  }

  p {
    line-height: 180%;
  }
`

const TextDiv = styled.div`
  width: 70%;
  margin: auto 0;
  padding: 20px;
  padding-left: 40px;
  background-color: #3f4040;
  border: 1px solid lightgrey;
  color: white;
  letter-spacing: 2px;

  @media (max-width: 800px) {
    width: 100%;
    border: none;
  }
`
export default class About extends Component {
  render() {
    return(
      <StyledDiv id='about'>
        <TextDiv>
          <p>Since 2002, Adam Holtzman occasionally designed and built websites for both himself and colleagues. Recently, his focus shifted to a more professional and deeper level of web development by learning front end languages, techniques and implementations. His current projects include developing sites with React, has been utilizing CSS in JS with Styled-Components and new design layouts with CSS Grid.</p>
          <p>Adam is a former chef, an art dealer and exhibiting artist (photography and painting). He has been known to produce photography and art books; designing, editing and intermittently publishing several since 2007. His artwork can be seen at <a href='http://www.adamholtzman.com' >adamholtzman.com</a></p>
        </TextDiv>
      </StyledDiv>
    );
  }
}
