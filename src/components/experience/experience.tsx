import React,{useEffect, useState} from 'react'
import {Container} from "react-bootstrap"
import {MdBusinessCenter} from "react-icons/md"
import {FaUserTie} from "react-icons/fa"
import {BsFillPatchCheckFill} from "react-icons/bs"
import {dataArray} from "./data"
import {AiFillDownCircle} from "react-icons/ai"
import "./experience.css"

type props = {
  experience : boolean
}

export const Experience = ({experience} : props) => {
  const [widthSize,setWidthSize] = useState<number>(0)

  const resize = () => {
    window.addEventListener("resize",() => {
      setWidthSize(window.innerWidth)
    })
  }

  useEffect(() => {
   resize()
  },[])

  const displayData = (data :string[]) => {
    let translate = 0
    return(
      data.map((ele :string) => {
        translate = translate + 1000
           return(
              <div className='d-flex gap-2 w-100' style={{transform : experience === false ? `translate(${translate}px)` :`translate(0px)`,transition : "0.8s"}}>
              <BsFillPatchCheckFill style={{color : "#4db5ff"}} className="mt-1"/>
              <span className='fs-6' style={{color:"rgba(255,255,255,0.6)"}}>{ele}</span>
              </div>
          )
    })
    )
  }

  const responsibilities = () => {
    return(
      <div className='d-flex flex-column p-5 gap-3' style={{width : "100%",borderRadius : "10px"}}>
      <span className='h4 align-self-center' style={{opacity: experience === false ? "0" : "1",transition : "0.6s"}}>Responsibilities</span>
          {displayData(dataArray)}
       </div>
    )  
}
  return (
    <Container id="experience" className='d-flex justify-content-center align-items-center p-5'>
          <div style={{width : "100%"}} className='d-flex flex-column justify-content-center align-items-center gap-5'>
          <span className='h1' style={{color:"rgba(77,181,255,0.4)",opacity: experience === false ? "0" : "1",transition : "0.6s"}}>
            Experience
          </span>
          <div className='expDiv d-flex w-100'>
            <div className='expBoxes d-flex justify-content-center align-items-center gap-3 w-50' style={{transform : experience ===true ?"translate(0px)" : "translate(-1000px)",transition :"0.6s"}}>
                  <div className='d-flex flex-column justify-content-center align-items-center gap-3' style={{width : "200px",height : "200px",backgroundColor:"#2c2c6c",borderRadius:"10px"}}>
                      <MdBusinessCenter style={{color : "#4db5ff"}} size={40}/>
                        <span className='h5 text-center'>
                          Gallagher Service Center LLP
                        </span>
                        <span>Pune, India</span>
                  </div>
                  <div className='d-flex flex-column justify-content-center align-items-center gap-3' style={{width : "200px",height : "200px",backgroundColor:"#2c2c6c",borderRadius:"10px"}}>
                      <FaUserTie style={{color : "#4db5ff"}} size={40}/>
                        <span className='h5 text-center mb-4'>
                          Process Analyst
                        </span>
                        <span className='mt-2'>2017 - 2020</span>
                  </div>
            </div>
            <div className='res d-flex justify-content-center align-items-center gap-3 flex-column'>
                       
                       {responsibilities()}
                       
            </div>
          </div>
          <div style={{zIndex : "100"}} className='d-flex gap-2 justify-content-center align-items-center'>
        <span>Education Section</span>
        <a href="#education">
        <AiFillDownCircle style={{color : "#4db5ff"}}/>
        </a>
          </div>
          </div>
    </Container>
  )
}