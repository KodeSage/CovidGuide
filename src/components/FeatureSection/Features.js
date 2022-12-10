import React from 'react'
import Container from '../CommonStyles/Container';
import { FeatureWrapper, TopLine, FeaturesMainCard ,FeatureImage, FeaturesCards ,Img} from './FeaturesElements';
import FeaturesCard from './FeaturesCard';
import { Test, Symptoms, Vaccination, Longtermeffect, Treatment, Prevention } from './FeaturesData';
import socialdistance from '../../Images/socialdistancing.svg';

const Features = () => {
    return (
      <FeatureWrapper id="features"
      >
        <Container>
          <TopLine>Features</TopLine>
          <FeaturesMainCard>
            <FeatureImage>
              <Img src={socialdistance} />
            </FeatureImage>
            <FeaturesCards>
              <FeaturesCard {...Test} />
              <FeaturesCard {...Symptoms} />
              <FeaturesCard {...Vaccination} />
              <FeaturesCard {...Prevention} />
              <FeaturesCard {...Treatment} />
              <FeaturesCard {...Longtermeffect} />
            </FeaturesCards>
          </FeaturesMainCard>
        </Container>
      </FeatureWrapper>
    );
}

export default Features;
