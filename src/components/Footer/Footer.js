import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter,FaEnvelope} from 'react-icons/fa';
import Container from '../CommonStyles/Container';
import {
  FooterWrapper,
  FooterHead,
  FooterItems,
  FooterText,
  FooterIcons,
  FootLink,
  FooterClose,
} from "./FooterElements";

const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    }
    return (
      <FooterWrapper>
        <Container>
          <FooterHead>CovidGuide</FooterHead>
          <FooterItems>
            <FooterText>Developed by Edimeh Ateko Ebenzer</FooterText>
            <FooterIcons>
              <FootLink href="mailto:ebenezerdimeh@gmail.com">
                <FaEnvelope />
              </FootLink>
              <FootLink>
                <FaInstagram />
              </FootLink>
              <FootLink>
                <FaFacebook />
              </FootLink>
              <FootLink>
                <FaTwitter />
              </FootLink>
            </FooterIcons>
            <FooterClose>
              Copyright &copy; {getYear()} CovidGuide | All rights reserved.
            </FooterClose>
          </FooterItems>
        </Container>
      </FooterWrapper>
    );
}

export default Footer
