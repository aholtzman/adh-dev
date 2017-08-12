import styled from 'styled-components'

export default styled.a`
  color: white;
  font-size: 25px;
  padding: 20px;
  text-decoration: none;
  margin-top: 30px;
  background-color: rgba(0, 0, 0, .6);
  border: 1px solid dimgrey;
  min-width: 350px;
  border-radius: 2px;

  @media (max-width: 800px) {
    min-width: 80%;
  }
`
