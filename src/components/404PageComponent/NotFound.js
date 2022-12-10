import React from 'react';
import Container from '../CommonStyles/Container';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import notfoundimage from "../../Images/NotfoundImage.jpg";
import { NotFoundPage, NotFoundTexts, NotFoundH2, NotFoundP, NotFoundBtn, NotFoundImage,Img } from './NotFoundElements';
import Sidebar from '../SideBar/Sidebar';

const NotFound = () => {
  return (
    <>
      <Navbar/>
      <Sidebar />
      <Container>
        <NotFoundPage>
          <NotFoundTexts>
            <NotFoundH2>
              Ooops, we couldn’t find that page. Seems you got lost
            </NotFoundH2>
            <NotFoundP>But do not worry, let’s get you back </NotFoundP>
            <NotFoundBtn to="/" exact>HOME</NotFoundBtn>
          </NotFoundTexts>
          <NotFoundImage>
            <Img src={notfoundimage} alt="notfound" />
          </NotFoundImage>
        </NotFoundPage>
      </Container>
      <Footer />
    </>
  );
};

export default NotFound;
