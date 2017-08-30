import styled from 'styled-components'

export default styled.div`
  background-color: darkgrey;
  background-image: url(${require('../images/bgPattern.png')});
  height: 100vh;
  width: 100%;
  border-bottom: 2px solid #303030;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    justify-content: flex-start;
  }
`
