
import styled from "styled-components";
import { motion } from "framer-motion";
export const FeatureWrapper = styled.section`
  background: #eeeeee;
  padding: 1rem;
`;
export const TopLine = styled.h2`
	color: #1141d2;
	font-size: 1.5rem;
	text-transform: uppercase;
`;
export const FeaturesMainCard = styled.div`
  width: 100%;`
export const FeatureImage = styled.div`
  align-items:center;
  justify-content:center;
`;
export const Img = styled.img`
width:100%;

`
export const FeaturesCards = styled.div`
  margin-top: 80px;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  flex-direction: row;
  overflow: hidden;

  @media screen and(max-width: 960px) {
    flex-direction: column;
    flex-wrap: nowrap;
    padding: -40px;
  }
`;

// FeaturesCard Styles
export const Card = styled(motion.div)`
  width: 30%;
  padding: 15px;
  background: #fff;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  &:hover {
   box-shadow: 0 1px 3px rgba(0,0,0,1);
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const CardTitle = styled.h3`
	text-align: center;
	color: #1141d2;
	margin-bottom: 1.5rem;
`;

export const CardDescription = styled.p`
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0 15px;
`;