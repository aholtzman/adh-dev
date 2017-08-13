import styled from 'styled-components'

export default styled.div`
  display: flex;
  margin: 20px;
  align-items: baseline;

  img {
    width: 150px;
    height: 150px;
    border-radius: 2px;
    margin-right: 40px;
    border: 1px solid dimgrey;
  }

  h2 {
    color: white;
    text-shadow: 1px 1px 5px dimgrey;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`
