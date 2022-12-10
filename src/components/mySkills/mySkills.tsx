import React,{useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import {mySkillsDivStyle} from "./mySkillsStyles"
import {BsFillPatchCheckFill} from "react-icons/bs"
import {AiFillDownCircle} from "react-icons/ai"

type props = {
  mySkills : boolean
}

export const MySkills = ({mySkills} : props) => {

  const skillSet = ["HTML","CSS","JavaScript","React","React-Redux","React-TypeScript","Bootstrap","Tailwind","NodeJs","Python","MongoDB","Postgresql","Docker","Work With API's","Knex"]

  const [widthSize,setWidthSize] = useState<number>(0)

  console.log(widthSize)

  const resize = () => {
    window.addEventListener("resize",() => {
      setWidthSize(window.innerWidth)
    })
  }

  useEffect(() => {
   resize()
  },[])

  const skills = (skill:string[],start : number,end : number) => {
            return(
              skill.slice(start,end).map((ele) => {
                  return(
                    <div className='d-flex gap-2'>
                    <BsFillPatchCheckFill style={{color : "#4db5ff"}} className='mt-1' />
                    <span className='fs-6' style={{color:"rgba(255,255,255,0.6)"}}>{ele}</span>
                </div>
                  )
              })
            )  
  }

  return (
    <Container id="skills" style={{maxWidth : "100%",padding : "0px 0px",margin :"0px 0px"}} className='d-flex justify-content-center align-items-center p-5'>
     <div className='d-flex align-items-center flex-column gap-5' style={{transition:"0.6s",width : "100%",}}>

      <span className='h1' style={{color:"rgba(77,181,255,0.4)",opacity:mySkills === true ? "1" : "0",transition : "0.6s"}}>My Skills</span>

        <div className={`d-flex gap-5 ${widthSize > 930 ? "" : "flex-column justify-content-center align-items-center"} `} style={{width : "100%"}}>
        <div className='d-flex text-center flex-column gap-3' style={{width : "100%",transform : mySkills === true ? "translate(0px)" : "translate(-1000px)",transition : "0.6s"}}>
          <span className='fs-4 text-white'>Frontend Development</span>
      <div style={mySkillsDivStyle}>
    <div className={`d-flex  ${widthSize > 510 ? "" : "flex-column gap-3"}`} style={{width : "100%"}}>
    <div className={`d-flex flex-column gap-3 ${widthSize > 510 ? "" : "justify-content-start m-auto"}`} style={{width : widthSize > 510 ? "50%" : "60%"}}>
          {skills(skillSet,0,4)}
    </div>

      <div className={`d-flex flex-column gap-3 ${widthSize > 510 ? "" : "justify-content-start m-auto"}`} style={{width : widthSize > 510 ? "50%" : "60%"}}>
        {skills(skillSet,4,8)}
  </div>
      </div>

        </div>
        </div>


        <div className={`d-flex gap-3 text-center flex-column ${widthSize > 930 ? "" : "flex-column justify-content-center align-items-center"}`} style={{width : "100%",transform : mySkills === true ? "translate(0px)" : "translate(1000px)",transition : "0.6s"}}>
          <span className='fs-4 text-white'>backend development</span>
        <div style={mySkillsDivStyle}>
                <div className={`d-flex ${widthSize > 510 ? "" : "flex-column gap-3"}`} style={{width : "100%"}}>
                  <div className={`d-flex flex-column gap-3 ${widthSize > 510 ? "" : "justify-content-start m-auto"}`} style={{width :widthSize? "50%" : "60%"}}>
                    {skills(skillSet,8,12)}
                </div>

                <div className={`d-flex flex-column gap-3 ${widthSize > 510 ? "" : "justify-content-start m-auto"}`} style={{width : widthSize ? "50%" : "60%"}}>
                      {skills(skillSet,12,15)}
               </div>
        </div>
      </div>
    </div>
  </div>
  <div className='d-flex gap-2 justify-content-center align-items-center'>
        <span>Experience Section</span>
        <a href="#experience">
        <AiFillDownCircle style={{color : "#4db5ff"}}/>
        </a>
 </div>
</div>
      </Container>
  )
}

