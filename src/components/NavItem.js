import styled from 'styled-components'

export default styled.a`
  color: white;
  font-size: 25px;
  padding: 20px;
  text-decoration: none;
  background-color: #3f4040;
  border: 1px solid lightgrey;
  max-width: 350px;
  min-width: 200px;
  border-radius: 2px;
  text-align: center;
  margin: 10px;

  @media (max-width: 800px) {
    width: 80%;
    margin: 0;
  }
`
