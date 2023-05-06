import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <div className='container flex flex-center'>
      <div className='my-social-media'>
          <ul>
            <li><a href='https://www.facebook.com/mahmoud.safaya.1/' target='_blank' rel='noreferrer'>
              <FaFacebookSquare />
            </a></li>
            <li><a href='https://www.linkedin.com/in/mahmoud-safaya-b9b32019b/' target='_blank' rel='noreferrer'>
              <FaLinkedin />
            </a></li>
            <li><a href='https://www.instagram.com/mahmoudsafaya8338/' target='_blank' rel='noreferrer'>
              <GrInstagram />
            </a></li>
            <li><a href='https://github.com/MahmoudSafaya?tab=repositories' target='_blank' rel='noreferrer'>
              <FaGithub />
            </a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
