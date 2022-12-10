import React from 'react';
import { TestCard, TestWords, TestWrap, TestImage, Img, TestContent, TestName, TestOccupation } from './TestimonialElements';

const TestimonialDetails = ({ tname, content, occupation, img }) => {
  return (
    <TestCard id=''>
          <TestWords>{content}</TestWords>
      <TestWrap>
        <TestImage>
                  <Img src={img}/>
        </TestImage>
        <TestContent>
        <TestName>{ tname}</TestName>
                  <TestOccupation>{occupation}</TestOccupation>
        </TestContent>
      </TestWrap>
    </TestCard>
  );
};

export default TestimonialDetails
