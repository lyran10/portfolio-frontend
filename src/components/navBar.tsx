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
  const [instruction,setInstruction] = useState<boolean>(true)
  const [width,setWidth] = useState<string>("60px")

  useEffect(() => {
    setBoolean(window.pageYOffset > 500 ? false : true)
    
  }, [boolean])

 const handleArrow = (num : string) => {
      setMoveIn(num)
      setInstruction(false)
      setWidth("0px")
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
        {moveIn === "25" ? 
        <MdArrowForwardIos style={{cursor : "pointer",transition : "0.6s"}} onClick={() => handleArrow("100")} size={20}/>
        :
            <MdArrowBackIosNew style={{cursor : "pointer",transition : "0.6s"}} onClick={() => handleArrow("25")} size={20}/>
  }
      </Nav>
      {instruction ? 
      <div style={{backgroundColor : "black",padding : "10px",borderRadius : "10px"}} >
          <span>Menu here</span>
      </div>
 : null}
    </Container>
  )
}