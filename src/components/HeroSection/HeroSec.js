import React from 'react';
import Container from '../CommonStyles/Container';
import { HeroDiv, HeroImage,HeroText, Img, HeroHeader,HeroButton, ArrowRight } from "./HeroSecElements";
import heroImage from '../../Images/medicalcare.svg';


const HeroSec = () => {
    return (
      <Container>
        <HeroDiv id='/'>
          <HeroText
            animate={{
              x: [-100, 10],
            }}
            transition={{
              x: {
                duration: 1,
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
          >
            <HeroHeader>
              Learn more about COVID-19, including how to protect yourself
              against the virus and how to treat it.
            </HeroHeader>
            <HeroButton to="/signup">
              Get Started
              <ArrowRight />
            </HeroButton>
          </HeroText>
          <HeroImage
            animate={{
              x: [100, 0],
            }}
            transition={{
              x: {
                duration: 1,
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
          >
            <Img src={heroImage} alt="medicare" />
          </HeroImage>
        </HeroDiv>
      </Container>
    );
}

export default HeroSec
