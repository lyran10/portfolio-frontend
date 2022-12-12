import React,{useState} from 'react'
import { Container,Image,Button } from 'react-bootstrap'
import { imageDiv,mainContainer,imagestyle } from './styling'
import image from "../home/liran.jpg"
import {FaLinkedin,FaGithub,FaInstagram,FaFacebookSquare} from "react-icons/fa"
import PDF from "./Liran_CV.pdf"

export const Home = () => {
const [rotate,setRotate] = useState<string>("10deg")
const [scale,setScale] = useState<string>("1")

const animation = (deg :string,scale :string) => {
  setRotate(deg)
  setScale(scale)
}

const icons = (icon : JSX.Element,url : string) => {
  return (
    <a target={"_blank"} href={url} style={{color : "#4db5ff",opacity : "0.6"}}>
      {icon}
    </a>
        )
}

  return (
    <Container id="home" className='d-flex justify-content-center gap-5 align-items-center flex-column' style={mainContainer}>
      <div className='d-flex flex-column gap-2 justify-content-center align-items-center'>
      <span className='text-white'>Hi, I am</span>
      <span className='fs-2 text-white'>Liran Ramekar</span>
      <span className='text-white'>Full Stack Developer</span>
      </div>
      <div className='d-flex gap-3'>
        {icons( <FaLinkedin size={20}/>,"https://www.linkedin.com/in/liran-ramekar-398163217/")}
        {icons( <FaInstagram size={20}/>,"https://www.instagram.com/liranimmanuel/")}
        {icons( <FaGithub size={20}/>,"https://github.com/lyran10")}
        {icons( <FaFacebookSquare size={20}/>,"https://www.facebook.com/liran.immanuel")}
      </div>
      <a href={PDF} download="CV">
      <Button style={{backgroundColor: "#1f1f38",border : "1px solid #4db5ff"}}>DownLoad CV</Button>
      </a>
      
      <div className='d-flex flex-column'>
        <div style={{height:"300px",width : "290px",backgroundColor:"#4db5ff",borderRadius:"10px",position:"absolute"}}>
        </div>
        <div
         className='image'
         onMouseEnter={() => animation("0deg","1.1")}
         onMouseLeave={() => animation("10deg","1")}
          style={imageDiv("10",rotate,scale)}>
        <Image
         src={image} style={imagestyle}/>
        </div>
      </div>
    </Container>
  )
}