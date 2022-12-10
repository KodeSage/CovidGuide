import React from 'react'
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from 'react-icons/fa';

function Navbar({toogle}) {
    return (
      <>
        <Nav>
          <NavContainer>
            <NavLogo to="/">covidguide</NavLogo>
            <MobileIcon onClick={toogle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
          cls        exact="true"
                  offset={-80}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="features"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Features
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="testimonial"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-102}
                >
                  Testimonial
                </NavLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavContainer>
        </Nav>
      </>
    );
}


export default Navbar;



