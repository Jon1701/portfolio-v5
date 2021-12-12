import React from 'react';
import styled from 'styled-components';

import { Section, Margin, H1 } from '_templates/Sections/MainPage';

/**
 * Custom Section.
 */
const CustomSection = styled(Section)`
  text-align: center;
`;

/**
 * Custom heading.
 */
const Name = styled(H1)`
  font-size: 2.5em;
  margin-top: 0;
`;

/**
 * Current position.
 */
const Position = styled.div`
  font-size: 1.5em;
  margin-bottom: 35px;
`;

/**
 * Tagline.
 */
const Tagline = styled.div``;

/**
 * Landing Section.
 *
 * @returns {React.Component} Landing Section.
 */
const LandingSection = () => (
  <CustomSection minHeight="100vh">
    <Margin>
      <Name>Jon Balon</Name>

      <Position>Front-End Web Developer</Position>

      <Tagline>
        I am a Front-End Web Developer who builds modern web applications with
        the latest technologies.
      </Tagline>
    </Margin>
  </CustomSection>
);

export default LandingSection;
