import React, { Component } from 'react'
import Items from './PortItem'
import styled from 'styled-components'

const StyledPortfolio = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
  background-color: #5b73ab;
  border-bottom: 2px solid #303030;
`

class Portfolio extends Component {
  render() {
    return(
      <StyledPortfolio id='portfolio'>
        {this.props.data.map((data) => {
          return <Items data={data} key={data.id} title={data.title} />
        })}
      </StyledPortfolio>
    )
  }
}

export default Portfolio
