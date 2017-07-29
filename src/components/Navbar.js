import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'
import 'zenscroll'

const NavArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-left: 20px;
`

const Navbar = () => {
  return(
    <NavArea>
      <NavItem href='#about'>About</NavItem>
      <NavItem href='#portfolio'>Portfolio</NavItem>
      <NavItem href='#code'>Connect</NavItem>
    </NavArea>
  )
}

export default Navbar
