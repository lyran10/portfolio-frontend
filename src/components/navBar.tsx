import React from 'react'
import {Container,Nav} from "react-bootstrap"

export const NavBar = () => {
  return (
    <Container style={{display:"flex",justifyContent:"center",alignItems:"center",maxWidth : "100%",margin :"0px 0px",padding : "0px 0px",position : "fixed",width : "100vw",backgroundColor:"black"}}>
      <Nav className='d-flex justify-content-center align-items-center p-2'>
        <Nav.Item>
          <Nav.Link className='text-white'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white'>About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white'>Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white'>Education</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white'>Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white'>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white'>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  )
}