import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding> 
    <LeftSection> 
      <SectionTitle main center> 
        Welcome To <br />
        Daniel Fletcher's Portfolio!
      </SectionTitle>
      <SectionText> 
        I love learning the ins and outs of the development world, and seeing what I can accomplish with the web at my fingertips. 
      </SectionText>
      <SectionText> 
        Computer Science Student at the University of Houston
      </SectionText>
      <Button onClick={()=> window.location = 'https://google.com'}> Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;