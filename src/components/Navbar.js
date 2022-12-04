import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
    if(pathname === '/portfolio/'){
      setActive('/');
    } else if(pathname === '/portfolio/about'){
      setActive('about')
    } else if(pathname === '/portfolio/contact'){
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
                <li><Link className={`${active === '/' ? 'active' : ''}`} to={'/portfolio/'} onClick={reRender}>
                  Portfolio
                </Link></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><Link to={'/portfolio/about'} className={`${active === 'about' ? 'active b-m-h' : 'b-m-h'}`} onClick={reRender}>
                  About
                </Link></li>
                <li><Link to={'/portfolio/contact'} className={`${active === 'contact' ? 'active' : ''}`} onClick={reRender}>
                  Contact
                </Link></li>
              </ul>
            </div>
          </div>

          <div className='content'>
            <Switch>
              <Route path='/portfolio/about' exact component={About}>
                <About />
              </Route>
              <Route path='/portfolio/contact' exact component={Contact}>
                <Contact />
              </Route>
              <Route path='/portfolio/' exact component={Portfolio}>
                <Portfolio />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </nav>
  )
}

export default Navbar
