import React,{useEffect, useState} from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import {mySkillsDivStyle} from "./mySkillsStyles"
import {BsColumns, BsFillPatchCheckFill} from "react-icons/bs"
import {AiFillDownCircle} from "react-icons/ai"
import {FaDatabase,FaLaptopCode} from "react-icons/fa"
import "../mySkills/myskills.css"

type props = {
  mySkills : boolean
}

export const MySkills = ({mySkills} : props) => {

  const skillSet = ["HTML","CSS","JavaScript","React","Redux","TypeScript","Bootstrap","Tailwind","NodeJs","Python","MongoDB","Postgresql","Docker","API's","Knex"]

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
                    <span className='col-md-3 fs-6 d-flex gap-2 w-100' style={{color:"rgba(255,255,255,0.6)"}}>
                    <BsFillPatchCheckFill style={{color : "#4db5ff"}} className='mt-1' />
                      {ele}
                      </span>

                  )
              })
            )  
  }

  return (
    <Container id="skills" style={{maxWidth : "100%",padding : "0px 0px",margin :"0px 0px"}} className='d-flex justify-content-center align-items-center p-5'>
     <div className='d-flex align-items-center flex-column gap-5' style={{transition:"0.6s",width : "100%",}}>

      <span className='h1' style={{color:"rgba(77,181,255,0.4)",opacity:mySkills === true ? "1" : "0",transition : "0.6s"}}>My Skills</span>
        <div className='skillsDiv d-flex flex-column gap-5 justify-content-center align-items-center w-100'>
        <div className='skillBox d-flex text-center flex-column gap-3' style={{transform : mySkills === true ? "translate(0px)" : "translate(-1000px)",transition : "0.6s"}}>
          <span className='fs-4 text-white'>Frontend Development</span>
      <div className='p-3' style={mySkillsDivStyle}>
    <div className='skillDiv d-flex gap-5 justify-content-center align-items-center w-100'>
    <FaLaptopCode size={150} />
    <div className='skillList gap-3 d-flex w-100'>
    <div className='row d-flex flex-column gap-3 w-100'>
          {skills(skillSet,0,4)}
    </div>
      <div className='row d-flex flex-column gap-3 w-100'>
        {skills(skillSet,4,8)}
    </div>
    </div>
      </div>

        </div>
        </div>


        <div className='skillBox d-flex gap-3 text-center flex-column' style={{transform : mySkills === true ? "translate(0px)" : "translate(1000px)",transition : "0.6s"}}>
          <span className='fs-4 text-white'>backend development</span>
        <div className='p-3' style={mySkillsDivStyle}>
                <div className='skillDiv d-flex justify-content-center align-items-center gap-5 w-100'>
                  <FaDatabase size={150}/>
                  <div className='skillList gap-3 d-flex w-100'>
                  <div className='row d-flex flex-column gap-3 w-100'>
                    {skills(skillSet,8,12)}
                </div>

                <div className='row d-flex flex-column gap-3 w-100'>
                      {skills(skillSet,12,15)}
               </div>
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

