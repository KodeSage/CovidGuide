import React from 'react';
import Container from './Container';
import { NavLogo, CovidWrapper } from '../Navbar/NavbarElements';
const CovidLogo = () => {
    return (
      <div>
        <Container>
          <CovidWrapper>
            <NavLogo to="/">covidguide</NavLogo>
          </CovidWrapper>
        </Container>
      </div>
    );
};

export default CovidLogo;
