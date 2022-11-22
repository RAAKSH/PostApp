import React, {useState, useEffect, useCallback, useMemo} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './NavigationBar.css';
import  GoogleBtn  from '../GoogleBtn';
import { Link } from 'react-router-dom';



function NavigationBar() {
  let pathName = useMemo(
    () => window.location.pathname,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [window.location.pathname],
  )

  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])

  return (
    <div className="navBar1">
      <Navbar
        color="dark"
        dark
        className="fixed-top d-flex justify-content-between"
        expand="md"
      >
        <NavItem>
          <Link to="/" className="text-white">
           Home
          </Link>
        </NavItem>

        <NavbarToggler onClick={toggle} style={{width: 'auto'}} />
        <Collapse
          className=""
          isOpen={isOpen}
          navbar
          style={{
            color: 'white',
            width: 'auto',
          }}
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/addPost" onClick={toggle}>
                <p
                  className={`m-2 ${
                    !!!pathName.split('/')[1] ? 'text-white' : 'text-secondary '
                  }`}
                >
                  {' '}
                 AddPost
                </p>
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/" onClick={toggle}>
                <p
                  className={`m-2 ${
                    pathName.split('/')[1] === 'MostLikedPost'
                      ? 'text-white'
                      : 'text-secondary'
                  }`}
                >
                  {' '}
                 <GoogleBtn />
                </p>
              </Link>
            </NavItem>

           
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
