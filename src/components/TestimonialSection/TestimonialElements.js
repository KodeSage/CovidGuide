import styled from "styled-components";
import { motion } from "framer-motion";


export const TestimonialWrapper = styled.div`
	background: #1141d2;
	padding: 1rem;
`;
export const TestHeader = styled.h2`
  font-size: 1.5rem;
  color:#fff;
  text-transform:uppercase;
  margin-bottom: 1rem;
`;
export const Colon = styled.img`
font-size: 2rem;
color: #000;
`;
export const TestSlides = styled(motion.div)`

`;


// TestimonialDetails

export const TestCard = styled.div`
    /* width: 50rem; */
    /* max-width:95%; */
    background: #fff;
    margin: 0 1rem;
    padding: 1.5rem;
  font-family: "Montserrat", sans-serif;
  border-radius: 10px;
`;

export const TestWords = styled.p`
    font-size: 1rem;
    font-style:italic;
    margin-bottom: 1rem;
`
export const TestWrap = styled.div`
display:flex;
align-items:center;
`
export const TestImage = styled.div`
`
export const Img = styled.img`
  
`
export const TestContent = styled.div`

`
export const TestName = styled.h3`
font-size:1rem;
`
export const TestOccupation = styled.h3`
font-size:0.8rem;
`