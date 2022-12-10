import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NotFoundPage = styled.div`
  display: flex;
  gap: 1rem;    

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
  `
export const NotFoundTexts = styled.div`
  margin-top: 3rem;
  align-items: center;
  justify-content: center;
`;
export const NotFoundH2 = styled.h2`
  font-size: 2rem;
  line-height: 1.5;
  margin-bottom: 1.6rem;
  color: #3f3d56;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const NotFoundP = styled.p`
  font-size: 1.3rem;
  color: #3f3d56;
  margin-bottom: 1.6rem;
`;
export const NotFoundBtn = styled(LinkR)`
  padding: 12px 54px;
  border-radius: 10px;
  background: #006fd6;
  color: white;
  text-decoration: none;
  font-size: 1.3rem;

  &:hover {
    opacity: 0.9;
  }
  @media screen and (max-width: 780px) {
    padding: 10px 40px;
  }
`;
export const NotFoundImage = styled.div`
`;
export const Img = styled.img`
width:100%;
`
