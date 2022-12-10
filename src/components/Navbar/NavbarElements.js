import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

import { Link as LinkS } from 'react-scroll';
  
export const Nav = styled.nav`
  display: flex;
  height:80px;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 5;
  background: #fff;

  @media screen and  (max-width: 768px) {
    transition: 0.8s all ease;
  }

  `
  
export const NavContainer = styled.div`
background-color: #fff;
display: flex;
justify-content: space-between;
height: 80px;
z-index:1;
width: 100%;
padding: 0 2rem;
max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
	font-size: 1.5rem;
	color: #1141d2;
	justify-self: flex-start;
	cursor: pointer;
	align-items: center;
	display: flex;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;
  position: absolute;
  top: 10px;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.5rem;
  cursor: pointer;
  /* height: 40px; */

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right:-22px;

@media screen and (max-width: 768px){
  display:none
}

` 
export const NavItem = styled.li`
height: 80px;
`
export const NavLink = styled(LinkS)`
  color: #3f3d56;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.1rem;

  &.active {
    color: #1141D2;
    /* border-bottom: 1px solid #3f3d56; */
  }
  &:hover {
    color: #1141D2;
  }
`;
    
export const NavBtn = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
 

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  padding: 16px 64px;
  text-decoration: none;
  background-color: transparent;
  border-radius: 10px;
  white-space: nowrap;
  border: 2px solid #1141D2;
  color: #1141D2;
  transition: 0.3s all ease-in-out;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    background: #1141D2;
    color: white;
  }
`;

// CovidWrapper

export const CovidWrapper = styled.div`
 padding: 2rem 0;
`


