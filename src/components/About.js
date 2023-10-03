import React from 'react'
import { BsArrowRight } from "react-icons/bs";
// import Resume from '../assets/MahmoudSafayaResume.pdf'

const About = () => {
  return (
    <div className='about'>
      <h1 className='flex'>About Me <BsArrowRight /></h1>
      <div className='gray-bg'>
        <section className='personal-info'>
          <h2>Personal</h2>
          <div className='inner-container'>
            <div>
              <p>I'm a junior front-end developer with more than 2 years of experience. I have a bachelor's degree in Computer Science. <br />Currently, I'm working at <b>AMS Alafaf Medical</b> Company, but I'm seeking new opportunities.
              </p>
            </div>
          </div>
        </section>


        <section className='education-info'>
          <h2>Education</h2>
          <div className='inner-container'>
            <p><b>College: </b> Faculty of Computer and Information</p>
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
              <li>Typescript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Redux.js</li>
              <li>Bootstarp - SASS</li>
              <li>TailwindCSS</li>
              <li>JSON - AJAX</li>
              <li>GIT & GITHUB</li>
              <li>
                {/* <a href={Resume} download='MahmoudSafayaResume.pdf' target='_blank' className='mr-20'>Download my Resume</a> */}
                <a
                  href='https://drive.google.com/file/d/1ttHJ5f-8XSPfrmCijtJnNfSoBjSAlDEn/view?usp=sharing'
                  target='_blank'
                  rel="noreferrer"
                >
                  Download my CV
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
