import React from 'react';
import { TestimonialWrapper, TestHeader, Colon, TestSlides} from "./TestimonialElements";
import TestimonialDetails from './TestimonialDetails';
import Container from '../CommonStyles/Container';
import colon from '../../Images/colon.svg';
import Slider from "react-slick";
import { settings, firstTest, secondTest, thirdTest, fourthTest} from './TestimonialData';
const Testimonial = () => {

    return (
      <TestimonialWrapper id="testimonial">
        <Container>
          <TestHeader>Testimonial</TestHeader>
          <Colon src={colon} alt="colon" />
          <TestSlides>
            <Slider {...settings}>
              <TestimonialDetails {...firstTest} />
              <TestimonialDetails {...secondTest} />
              <TestimonialDetails {...thirdTest} />
              <TestimonialDetails {...fourthTest} />
            </Slider>
          </TestSlides>
        </Container>
      </TestimonialWrapper>
    );
}

export default Testimonial
