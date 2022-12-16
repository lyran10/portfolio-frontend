import React,{useEffect,useState} from 'react'
import {Container,Nav} from "react-bootstrap"
import {AiFillHome} from "react-icons/ai"
import {FaUserTie,FaAward} from "react-icons/fa"
import {BsCodeSlash} from "react-icons/bs"
import {MdCastForEducation,MdContactPhone} from "react-icons/md"
import {AiOutlineFilePpt} from "react-icons/ai"
import "./navbar.css"
import {MdArrowBackIosNew,MdArrowForwardIos} from "react-icons/md"

export const NavBar = () => {
  const [boolean,setBoolean] = useState<boolean>(false)
  const [moveIn,setMoveIn] = useState<string>("25")
  const [width,setWidth] = useState<string>("60px")
  const [rotate,setRotate] = useState<string>("0")
  const [opacity,setOpacity] = useState<string>("1")

  useEffect(() => {
    setBoolean(window.pageYOffset > 500 ? false : true)
    
  }, [boolean])

 const handleArrow = () => {
      moveIn === "25" ? setMoveIn("100") : setMoveIn("25")
      rotate === "180" ? setRotate("0") : setRotate("180")
        setOpacity("0")
  }
  
  return (
    <Container className='navBar' style={{display:"flex",justifyContent:"end",alignItems:"center",width : width,margin :"0px 0px",padding : "0px 0px",position : "fixed",height : "100vh",transition : "0.6s",transform : `translate(${moveIn}px)`,zIndex : "99"}}>
      <Nav className='navBar d-flex justify-content-center me-1 gap-3 align-items-center p-1 flex-column' style={{borderRadius : "10px",backgroundColor : "black"}}>
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
      <Nav>
        <MdArrowForwardIos style={{cursor : "pointer",transition : "0.6s",transform : `rotate(${rotate}deg)`}} onClick={() => handleArrow()} size={20}/>
      </Nav>
      <div style={{backgroundColor : "black",padding : "10px",borderRadius : "10px",transition : "0.6s",opacity : opacity}} >
          <span>Menu here</span>
      </div>
    </Container>
  )
}