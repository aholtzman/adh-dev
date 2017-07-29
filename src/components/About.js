import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: #FFFAFA;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #303030;

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
          <p>A lot of very nice things said about Adam Holtzman</p>
          <p>
          Spicy jalapeno bacon ipsum dolor amet cupim ground round picanha doner, swine porchetta kevin short loin tri-tip rump pork belly kielbasa. Flank short ribs andouille shankle doner t-bone capicola fatback boudin kielbasa. Boudin capicola strip steak pastrami pork loin, ribeye pork meatloaf jerky. Pork chop beef ribs tail leberkas, corned beef chuck ham hock cupim turkey.
          </p><p>
Sausage t-bone rump meatball pancetta ham biltong turkey short ribs drumstick pork pastrami. Fatback flank pastrami, turkey corned beef brisket boudin ribeye shank frankfurter. Filet mignon t-bone tail chicken, meatloaf cupim prosciutto beef pork belly tenderloin sausage. Frankfurter beef ribs fatback, tri-tip beef hamburger cupim spare ribs filet mignon corned beef ribeye strip steak kielbasa meatloaf. Ribeye biltong bacon prosciutto landjaeger filet mignon, drumstick cow spare ribs pork chop flank.</p>
        </TextDiv>
      </StyledDiv>
    );
  }
}
