import React,{useEffect,useState} from 'react'
import {Container,Nav} from "react-bootstrap"
import {AiFillHome} from "react-icons/ai"
import {FaUserTie,FaAward} from "react-icons/fa"
import {BsCodeSlash} from "react-icons/bs"
import {MdCastForEducation,MdContactPhone} from "react-icons/md"
import {AiOutlineFilePpt} from "react-icons/ai"

export const NavBar = () => {
  const [boolean,setBoolean] = useState<boolean>(false)

  useEffect(() => {
    if(window.pageYOffset > 500) setBoolean(true)
  }, [])
  
  return (
    <Container style={{display:"flex",justifyContent:"end",alignItems:"center",maxWidth : "100%",margin :"0px 0px",padding : "0px 0px",position : "fixed",width : "100vw",height : "100vh",backgroundColor:"transparent",zIndex:99}}>
      <Nav className='d-flex justify-content-center me-3 gap-3 align-items-center p-1 flex-column' style={{borderRadius : "10px",backgroundColor : "black"}}>
        <Nav.Item>
          <Nav.Link className='text-white' href='#home'><AiFillHome size={25}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white' href='#aboutMe'><FaUserTie size={25}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white' href='#skills'><BsCodeSlash size={25}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white' href='#experience'><FaAward size={25}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white' href='#education'><MdCastForEducation size={25}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white' href='#projects'><AiOutlineFilePpt size={25}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white' href='#contact'><MdContactPhone size={25}/></Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  )
}