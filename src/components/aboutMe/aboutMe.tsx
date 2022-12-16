import React,{useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import { aboutContainer, aboutMeDiv } from './aboutMeStyle'
import { MySkills } from '../mySkills/mySkills'
import {AiFillDownCircle} from "react-icons/ai"
import "./aboutMe.css"

type props = {
  aboutMe : boolean
}

export const AboutMe = ({aboutMe} : props) => {
  const [widthSize,setWidthSize] = useState<number>(0)
  console.log(widthSize)
  const resize = () => {
    window.addEventListener("resize",() => {
      setWidthSize(window.innerWidth)
    })
  }

  useEffect(() => {
   resize()
  },[widthSize])
  
  return (
    <Container id="aboutMe" className='d-flex justify-content-center align-items-center p-5 m-0 p-0' style={aboutContainer}>
      <div className='d-flex flex-column justify-content-center align-items-center gap-5'>
        <span className='h1' style={{color:"rgba(77,181,255,0.4)",opacity: aboutMe === false ? "0": "1",transition : "0.6s"}}>About Me</span>

        <Container className='aboutMeDiv d-flex gap-3' style={{width : "100%"}}>
        <div className='para' style={{transform: aboutMe === false ? "translate(-1000px)" : "translate(0px)",transition : "0.6s"}}>
          <span className='fs-5 lh-base text-center' style={{color:"rgba(255,255,255,0.6)"}}>
        My journey of becoming a web developer started during the lockdown when a thought came in my mind to start coding. So I started coding without any training. In the start it was quite easy to type Hello World. Slowely as I kept on learning it became so difficult which I never thought of. But I was eager to learn more about it, then decided to do a course in Full Stack Development. Coding excites me because in every project there is something new to learn and I am a kind of a person who likes to keep on experimenting and learn new things.
        </span>
        </div>

        <div className='boxes d-flex gap-2 justify-content-center align-items-center flex-wrap' style={{transform: aboutMe === false ? "translate(1000px)" : "translate(0px)",transition : "0.6s"}}>
            <div style={aboutMeDiv}>
                <span className='h5'>Experience</span>
                <span style={{color:"rgba(255,255,255,0.6)"}}>3+ years working</span>
                <span className='mb-4' style={{color:"rgba(255,255,255,0.6)"}}>Process Analyst</span>
            </div>
            <div style={aboutMeDiv}>
              <span className='h5'>Education</span>
            <span style={{color:"rgba(255,255,255,0.6)"}}>Graduated in B.B.A</span>
            <span className='text-center' style={{color:"rgba(255,255,255,0.6)"}}>Bachelors of Business Administration</span>
            </div>
        </div>
      </Container>
      <div style={{zIndex : "100"}} className='d-flex gap-2 justify-content-center align-items-center'>
        <span>Skills Section</span>
        <a href="#skills">
        <AiFillDownCircle style={{color : "#4db5ff"}}/>
        </a>
      </div>
      </div>
      </Container>
  )
}