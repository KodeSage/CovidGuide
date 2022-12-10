import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export const HeroDiv = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  /* gap: 1rem; */
    overflow:hidden;
    @media  screen and (max-width: 800px) {
    flex-direction: column;
    }
    @media screen and (max-width:480px){
      height: 500px;
    }
`;
export const HeroImage = styled(motion.div)`
  max-width: 455px;
  /* height: 100%; */
`;
export const Img = styled.img`
  width: 100%;
  `
export const HeroText = styled(motion.div)`
  margin-top: 4rem;
  align-items: center;
  width: 50%;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0rem;
  }
`;
export const HeroHeader = styled.h3`
  font-size: 2rem;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 1.6rem;
  /* padding-bottom: 20px; */
  color: #3f3d56;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const HeroButton = styled(LinkR)`
	padding: 10px 14px;
	border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
	background: #1141d2;
	color: white;
	text-decoration: none;
	font-size: 1.2rem;

	&:hover {
		opacity: 0.9;
	}
	@media screen and (max-width: 780px) {
		padding: 10px;
	}
`;
export const ArrowRight = styled(FaArrowRight)`
margin-left: 8px;
font-size: 20px;
padding-top: 5px;
`