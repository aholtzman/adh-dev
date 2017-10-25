import styled from 'styled-components'
import React from 'react'

const Area = styled.div`
  width: 100vw;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 2px solid #303030;

  @media (max-width: 800px) {
    height: 120px;
  }
`

const Image = styled.img`
  height: 50px;
  width: 50px;
  padding-bottom: 5px;
  padding-right: 10px;
`

const Stack = () => {
  return (
    <Area>
      <Image src={require('../images/react.png')}/>
      <Image src={require('../images/redux.png')}/>
      <Image src={require('../images/apollo-logo.png')}/>
      <Image src={require('../images/electron.png')}/>
      <Image src={require('../images/es6-logo.png')}/>
      <Image src={require('../images/gatsby.png')}/>
      <Image src={require('../images/GraphQL_Logo.png')}/>
      <Image src={require('../images/webpack.png')}/>
      <Image src={require('../images/yarn.png')}/>
    </Area>
  );
}

export default Stack
