import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

const Navbar = () => {
  const [active, setActive] = useState('/');
  // const navItems = ['/', 'about', 'contact'];
  // const newNavItems = navItems.filter(item => item !== active);

  const [count, setCount] = useState(1);
  const reRender = () => {setCount(count + 1)}

  useEffect(() => {
    let pathname = window.location.pathname;
    if(pathname === '/'){
      setActive('/');
    } else if(pathname === '/about'){
      setActive('about')
    } else if(pathname === '/contact'){
      setActive('contact')
    }
  }, [count]);

  return (
    <nav className='navbar'>
      <div className='container'>
        <Router>
          <div className='flex flex-between'>
            <div>
              <ul>
                <li><Link className={`${active === '/' ? 'active' : ''}`} to={'/'} onClick={reRender}>
                  Portfolio
                </Link></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><Link to={'/about'} className={`${active === 'about' ? 'active b-m-h' : 'b-m-h'}`} onClick={reRender}>
                  About
                </Link></li>
                <li><Link to={'/contact'} className={`${active === 'contact' ? 'active' : ''}`} onClick={reRender}>
                  Contact
                </Link></li>
              </ul>
            </div>
          </div>

          <div className='content'>
            <Routes>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/' element={<Portfolio />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </nav>
  )
}

export default Navbar
