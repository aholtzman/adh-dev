import styled from 'styled-components'

export default styled.div`
  margin: 20px;
  padding: 10px;
  border: 2px solid dimgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 350px;
  background-color: white;

  @media (max-width: 700px) {
    width: 290px;
  }
`
