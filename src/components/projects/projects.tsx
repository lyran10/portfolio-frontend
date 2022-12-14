import React from 'react'
import { Card, Container,Button } from 'react-bootstrap'
import weather from  "../projects/weather1.jpg"
import toDoList from  "../projects/toDoList.jpg"
import crypto from  "../projects/crypto.jpeg"
import {AiFillDownCircle} from "react-icons/ai"

type props = {
  projects : boolean
}

export const Projects = ({projects} : props) => {

  const buttonStyles : React.CSSProperties = {
    backgroundColor:"#4db5ff",
    color : "rgba(255,255,255,0.6)",
  }
  return (
    <Container id="projects" className='d-flex justify-content-center align-items-center p-5'>
    <div style={{width : "100%"}} className='d-flex flex-column justify-content-center align-items-center gap-5'>
    <span className='h1' style={{color:"rgba(77,181,255,0.4)",opacity: projects ? "1" : "0",transition : "0.6s"}}>
      Projects
    </span>
    <div className='d-flex gap-5 justify-content-center align-items-center flex-wrap' style={{width : "100%"}}>
    <Card className='d-flex justify-content-center align-items-center' style={{ width: '20rem',height: "25rem",backgroundColor:"#2c2c6c",transition : "0.6s", transform : projects ? "translate(0px)" : "translate(-2000px)" }}>
      <Card.Img variant="top" className='mt-3' src={weather} style={{height : "15rem",width : "90%",borderRadius:"10px"}}/>
      <Card.Body>
        <Card.Text >
          <span>
         Weather Application where a user can get the information of the weather of any city in the world.
          </span>
        </Card.Text>
        <div className='d-flex gap-3 justify-content-center align-items-center'>
          <a target={"_blank"} href="https://timely-zabaione-7f2a07.netlify.app">
          <Button style={buttonStyles}>Demo</Button>
          </a>
          <a target={"_blank"} href="https://github.com/lyran10/Weather-app/tree/main/weather-app-react">
            <Button style={buttonStyles}>GitHub</Button>
          </a>
          
          </div>
        </Card.Body>
    </Card>
    <Card className='d-flex justify-content-center align-items-center' style={{ width: '20rem',height: "25rem",backgroundColor:"#2c2c6c",transition : "0.9s", opacity : projects ? "1": "0" }}>
      <Card.Img variant="top" className='mt-3' src={toDoList} style={{height : "15rem",width : "90%",borderRadius:"10px"}}/>
      <Card.Body>
        <Card.Text >
          <span>
         To do list application where a user can also delete and update 
          </span>
        </Card.Text>
        <div className='d-flex gap-3 justify-content-center align-items-center'>
        <a target={"_blank"} href="https://todo-app-g82h.onrender.com/">
        <Button style={buttonStyles}>Demo</Button>
        </a>
        <a target={"_blank"} href="https://github.com/lyran10/to_do_app/tree/main/To-Do-App-react">
        <Button style={buttonStyles}>GitHub</Button>
        </a>
          
          </div>
      </Card.Body>
    </Card>
    <Card className='d-flex justify-content-center align-items-center' style={{ width: '20rem',height: "25rem",backgroundColor:"#2c2c6c",transition : "0.6s", transform : projects ? "translate(0px)" : "translate(2000px)"}}>
      <Card.Img variant="top" className='mt-3' src={crypto} style={{height : "15rem",width : "90%",borderRadius:"10px"}}/>
      <Card.Body>
        <Card.Text >
          <span>
         Crypto Currency tracker where a user can get all the information about any crypto currency and also create a wishlist to store them.
          </span>
        </Card.Text>
        <div className='d-flex gap-3 justify-content-center align-items-center'>
        <a target={"_blank"} href="https://crypto-frontend-wi77.onrender.com">
        <Button style={buttonStyles}>Demo</Button>
        </a>
        <a target={"_blank"} href="https://github.com/lyran10/crypto">
        <Button style={buttonStyles}>GitHub</Button>
        </a>
        
          </div>
      </Card.Body>
    </Card>
    </div>
    <div style={{zIndex : "100"}} className='d-flex gap-2 justify-content-center align-items-center'>
        <span>Contact Me</span>
        <a href="#contact">
        <AiFillDownCircle style={{color : "#4db5ff"}}/>
        </a>
          </div>
    </div>
</Container>
  )
}