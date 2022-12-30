import React from 'react';
import { DiFirebase, DiReact, DiZend, DiWindows, DiCodeBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech"> 
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText> 
      These are the technologies I have been able to work with so far.
    </SectionText>
    <List> 
      <ListItem> 
        <DiReact size="3rem" />
        <ListContainer> 
          <ListTitle>Front-End</ListTitle>
          <ListParagraph> 
            
            React.js <br/>
            HTML <br/>
            CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem> 
        <DiCodeBadge size="3rem" />
        <ListContainer> 
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph> 
            
            C++ <br/> 
            Java <br /> 
            Python <br /> 
            Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem> 
        <DiWindows size="3rem" />
        <ListContainer> 
          <ListTitle>OS & Tools</ListTitle>
          <ListParagraph> 
            Windows <br/> 
            Linux <br/> 
            Mac OS <br /> 
            Git & Github

            
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
