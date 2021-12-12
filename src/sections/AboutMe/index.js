import React from 'react';
import styled from 'styled-components';

import { Section, Margin, H2 } from '_templates/Sections/MainPage';
import ExternalLink from '_components/Links/ExternalLink';

import Technologies from './components/Technologies';

/**
 * Custom heading.
 */
const CustomH2 = styled(H2)`
  text-align: center;
`;

/**
 * Container for the Grid.
 */
const ContainerGrid = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  margin-top: 25px;
`;

/**
 * Grid.
 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 80px 80px 80px 80px;
  grid-gap: 10px;
`;

// Icon height.
const iconHeight = '50px';

/**
 * About Me Section.
 *
 * @returns {React.Component} Section.
 */
const AboutMeSection = () => (
  <Section minHeight="100vh">
    <Margin>
      <CustomH2>About Me</CustomH2>

      <p>Hi! My name is Jon. I am a self-taught developer based in Toronto.</p>

      <p>
        My interest in web development began in 2016, and since then, I have had
        the privilege of working at two startups: a{' '}
        <ExternalLink href="https://www.linkedin.com/company/navigate-technologies-inc/about/">
          Software as a Service incubator startup
        </ExternalLink>
        , as well as a{' '}
        <ExternalLink href="https://www.linkedin.com/company/pricematepay">
          Payment Processor startup
        </ExternalLink>
        .
      </p>

      <p>Here are some of the technologies I have used throughout my career:</p>

      <ContainerGrid>
        <Grid>
          <Technologies iconHeight={iconHeight} />
        </Grid>
      </ContainerGrid>
    </Margin>
  </Section>
);

export default AboutMeSection;
