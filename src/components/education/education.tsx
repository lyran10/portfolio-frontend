import React, { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import "./education.css"
import {AiFillDownCircle} from "react-icons/ai" 

type props = {
  education : boolean
}

export const Education = ({education} : props) => {
  const [widthSize,setWidthSize] = useState<number>(0)

  const resize = () => {
    window.addEventListener("resize",() => {
      setWidthSize(window.innerWidth)
    })
  }

  useEffect(() => {
   resize()
  },[])
  return (
    <Container id="education" className='d-flex justify-content-center align-items-center p-5' >
    <div className='d-flex flex-column justify-content-center align-items-center gap-5' style={{width : "100%"}}>
      <span className='h1' style={{color:"rgba(77,181,255,0.4)", opacity: education === true ? "1" : "0",transition : "0.6s"}}>Education</span>
      <div className={`${education && widthSize > 930 ? "educationList" : ""} d-flex gap-3`} style={{width : "100%",transition:"0.6s"}}>
          <ul className='mt-5 d-flex flex-column justify-content-center align-items-center gap-5 position-relative' style={{width : "100%",listStyle : "none",paddingLeft:"0px"}}>
            <li>
              <div className={`${widthSize < 930 ? "" : "box1"} d-flex flex-column justify-content-center align-items-center p-3 gap-2`}
               style={{transform : education ? widthSize > 930 ?"translate(-180px)" :"translate(0px)" : "translate(-2000px)",backgroundColor:"#2c2c6c",transition : "0.6s",border : "solid 3px #4db5ff",borderRadius:"10px"}}>
                <span className=''>2010 - 2013</span>
                <span className=''>University of Nagpur</span>
                <span>Hislop College, Nagpur, India</span>
                <span className=''>Bachelors of Business Administartion</span>
              </div>
            </li>
            <li >
            <div className={`${widthSize < 930 ? "" : "box2"} d-flex flex-column justify-content-center align-items-center p-3 gap-2`} style={{transform : education === true ? widthSize > 930 ?"translate(179px)": "translate(0px)": "translate(2000px)",width : "100%",backgroundColor:"#2c2c6c",transition : "0.6s",border : "solid 3px #4db5ff",borderRadius:"10px"}}>
              
                <span className=''>3/2022 - 9/2022</span>
                <span className=''>Developers Institute</span>
                <span>Tel Aviv</span>
                <span className=''>Full Stack Development (JavaScript)</span>
              </div>

            </li>
          </ul>
      </div>
      <div className='d-flex gap-2 justify-content-center align-items-center'>
        <span>Projects Section</span>
        <a href="#projects">
        <AiFillDownCircle style={{color : "#4db5ff"}}/>
        </a>
      </div>
    </div>
    </Container>
  )
}