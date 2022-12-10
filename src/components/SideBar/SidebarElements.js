import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  left: ${({ isOpen }) => (isOpen ? "0%" : "100%")};
`;

export const CloseIcon = styled(FaTimes)`
color: black;
`
export const Icon = styled.div`
position:absolute;
top: 1.2rem;
right: 1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`
export const SidebarWrapper = styled.div`
  color: #006fd6;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 50px);
  }
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #3f3d56;
  cursor: pointer;

  &:hover {
    color: #006fd6;
    transition: 0.2s ease-in-out;
  }
  &.active {
    color: #006fd6;
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
` 
export const SidebarRoute = styled(LinkR)`
	padding: 16px 64px;
	background-color: transparent;
	border-radius: 50px;
	white-space: nowrap;
	background: #1141d2;
	color: white;
	transition: 0.3s all ease-in-out;
	font-size: 1.3rem;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
		color: white;
	}
`;