import React, { useState } from 'react'
import { Container,Image,Form, InputGroup, Button } from 'react-bootstrap'
import photo from "../contactMe/liran2.jpg"
import { contactDetailStyles,linkContact } from './contactstyle'
import {FaWhatsapp,FaFacebookMessenger} from "react-icons/fa"
import axios from 'axios'
import { useEffect } from 'react'
import "./contact.css"

type info = {
  msg : string,
  subject : string,
  from : string
}


export const ContactMe = () => {
  const [widthSize,setWidthSize] = useState<number>(0)
  const [person,setPerson] = useState<info>({msg : "",subject : "",from : ""})

  const resize = () => {
    window.addEventListener("resize",() => {
      setWidthSize(window.innerWidth)
    })
  }

  useEffect(() => {
   resize()
  },[])

  const inputs = (placeholder : string,type:string,height : string, as : any,) => {
    return (
      <>
      {placeholder !== "Your Message" ?
       <InputGroup>
      <Form.Control
       placeholder={placeholder}
        className='p-3'
         style={{borderColor : "#4db5ff",backgroundColor:"transparent",color:"rgba(255,255,255,0.6)"}}
          type={type}
          onChange={(e) => setPerson({...person,[placeholder === "Your Email" ? "from" : "subject"] : e.target.value})}/>
    </InputGroup>
  : 
  <InputGroup>
  <Form.Control 
  placeholder={placeholder} 
  className='p-3' 
  style={{borderColor : "#4db5ff",backgroundColor:"transparent",color:"rgba(255,255,255,0.6)",height : height}} 
  as={as}
  onChange={(e) => setPerson({...person,msg : e.target.value})}
  />
</InputGroup>
  }
      </>
     
    )
  }


const handleClick = async() => {
  console.log(person)
  try {
      const data = await axios.post("http://localhost:4000/api/sendemail",{person})
      console.log(data)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <Container id="contact" className='d-flex justify-content-center align-items-center p-5 w-100' style={{maxWidth : "100%",margin : "0px 0px",padding :"0px 0px"}}>
      <div className='d-flex flex-column justify-content-center align-items-center gap-5 w-100'>
        <span className='h1' style={{color:"rgba(77,181,255,0.4)",opacity:"1",transition : "0.6s"}}>Contact me</span>

        <div className='contactDiv d-flex gap-3 w-100'>

        <div className='d-flex justify-content-center align-items-center' style={{transition : "0.6s",width : "40%"}}>
          <div className='d-flex gap-3 flex-column justify-content-center align-items-center' style={{width : "100%"}}>
          <Image style={{width : "20rem",borderRadius:"10px"}} src={photo} fluid/>
          <div className='d-flex flex-column justify-content-center align-items-center'>
          <span className='fs-5 fw-bolder text-white text-center'>Email - liranramekar7@gmail.com</span>

          <span className='fs-5 fw-bolder text-white text-center'>Contact number - 0536652453</span>
          </div>
          <div className='d-flex gap-3 w-100'>
                <div className='w-50 m-auto' style={contactDetailStyles}>
                <FaFacebookMessenger style={{color : "#4db5ff"}} size={25}/>
                <span className='text-white'>Messenger</span>
                <a target="_blank" className='text-decoration-none' href="http://m.me/liran.immanuel">
                  <span className='text-white text-center w-100'>Send message</span>
                </a>
                </div>
           </div>
          </div>
        </div>

        <div className='d-flex gap-5 justify-content-start align-items-center flex-column' style={{transition : "0.6s",width:"60%"}}>
            {inputs("Your Email","email","","")}
           {inputs("Subject","text","","")}
           {inputs("Your Message","","150px","textarea")}
            <Button onClick={() => handleClick()} style={{backgroundColor : "#4db5ff",color : "rgba(255,255,255,0.6)"}}>
              Send Message
            </Button>
        </div>
      </div>
      </div>
      </Container>
  )
}