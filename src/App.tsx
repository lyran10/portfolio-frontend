import React,{useEffect, useState} from 'react'
import './App.css';
import { AboutMe } from './components/aboutMe/aboutMe';
import {Home} from "./components/home/home"
import { MySkills } from './components/mySkills/mySkills';
import {Experience} from "./components/experience/experience"
import { Education } from './components/education/education';
import { Projects } from './components/projects/projects';
import { ContactMe } from './components/contactMe/contactMe';

function App() {
const [aboutMe,setAboutMe] = useState<boolean>(false)
const [mySkills,setMySkills] = useState<boolean>(false)
const [experience,setExperience] = useState<boolean>(false)
const [education,setEducation] = useState<boolean>(false)
const [projects,setProjects] = useState<boolean>(false)
const [contact,setContact] = useState<boolean>(false)

  useEffect(() => {
    window.onscroll = () => {
      setAboutMe(window.pageYOffset < 300 ? false : true)
      setMySkills(window.pageYOffset < 800 ? false : true)
      setExperience(window.pageYOffset < 1300 ? false : true)
      setEducation(window.pageYOffset < 2000 ? false : true)
      setProjects(window.pageYOffset < 3000 ? false : true)
      setContact(window.pageYOffset < 3000 ? false : true)
    }
  })

  return (
    <div>
      <Home/>
      <AboutMe aboutMe={aboutMe}/>
      <MySkills mySkills={mySkills}/>
      <Experience experience={experience}/>
      <Education education={education}/>
      <Projects projects={projects}/>
      <ContactMe/>
    </div>
  );
}

export default App;
