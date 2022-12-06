import React, { useState } from 'react'
import {BsArrowRight} from "react-icons/bs";
import { bigProjects } from '../Data'

const Portfolio = () => {
  const [bigPro, setBigPro] = useState(bigProjects);


  return (
    <div className='portfolio'>
      <section className='projects'>
        <h1 className='flex'>Projects <BsArrowRight /></h1>
        <div className='projects-view'>
          {bigPro.map(pro => {
            const {id, name, url, image} = pro;
            return(
              <div className='project' key={id}>
                <div className='pro-img' style={{background: `url('${image}') center center/cover`}}></div>
                <article className='details'>
                  <h4>{name}</h4>
                  <a href={url} target='_blank' rel="noreferrer">View Live</a>
                </article>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Portfolio
