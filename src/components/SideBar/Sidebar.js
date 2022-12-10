import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper, SidebarLink,SidebarRoute, SidebarMenu} from './SidebarElements';

const Sidebar = ({isOpen, toogle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toogle}>
        <Icon onClick={toogle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="/"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toogle}
            >
              Home
            </SidebarLink>
            <SidebarLink
              to="features"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toogle}
            >
              Features
            </SidebarLink>
            <SidebarLink
              to="testimonial"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toogle}
            >
              Testimonial
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign in</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default Sidebar;
