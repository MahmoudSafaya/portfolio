import React from 'react'
import {BsArrowRight} from "react-icons/bs";
import Resume from '../assets/MahmoudSafayaResume.pdf'

const About = () => {
  return (
    <div className='about'>
      <h1 className='flex'>About Me <BsArrowRight /></h1>
      <div className='gray-bg'>
        <section className='personal-info'>
          <h2>Personal</h2>
          <div className='inner-container'>
            <div>
              <p>I'm a professional Web Developer. Experience in Frontend techniques and user interface applications. I have a Bachelor's degree in Computer Science. I'm passionate about Web Development and seeking to build a my career and establish myself in this field.
              </p>
            </div>
          </div>
        </section>

      
        <section className='education-info'>
          <h2>Education</h2>
          <div className='inner-container'>
            <p><b>College: </b> Faculty of Computers and Information</p>
            <p><b>From:</b> 2018 <b>To:</b> 2022</p>
            <p><b>Department:</b> Computer Science</p>
          </div>
        </section>

      
        <section className='skills'>
          <h2>Skills</h2>
          <div className='inner-container'>
            <ul>
              <li>HTML5 - CSS3</li>
              <li>javaScript - ES6</li>
              <li>React.js</li>
              <li>Redux.js</li>
              <li>Bootstarp - SASS</li>
              <li>TailwindCSS</li>
              <li>JSON - AJAX</li>
              <li>GIT - GITHUB</li>
              <li><a href={Resume} download='MahmoudSafayaResume.pdf' target='_blank'>My Resume</a></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
