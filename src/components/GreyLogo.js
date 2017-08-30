import React from 'react'
import styled from 'styled-components'

const Area = styled.div`
  width: 400px;
  height: 400px;
  color: #d9d9d9;
  background-color: #3f4040;
  border: 1px solid lightgrey;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px){
    width: 80%;
    height: 300px;
    margin-top: 15px;
  }
`

const Circle = styled.div`
  width: 150px;
  height: 150px;
  background-color: #d9d9d9;
  border-radius: 50%;
  border: 1px solid #0d0d0d;
  color: #3f4040;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin-top: 15px;
`

const Name = styled.h3`
  margin-top: 70px;
  letter-spacing: 3px;

  @media (max-width: 700px) {
    margin-top: 20px;
  }
`

const Title = styled.h4`
  letter-spacing: 2px;
`

const GreyLogo = () => {
  return (
    <Area>
      <Circle><h1>{String('</>')}</h1></Circle>
      <Name>adam holtzman</Name>
      <Title>front-end developer</Title>
    </Area>
  );
}

export default GreyLogo
