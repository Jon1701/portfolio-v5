import React from 'react';
import styled from 'styled-components';

import { Margin, H1 } from '_templates/Sections/MainPage';
import desktopBreakpoint from '_util/responsiveDesign/desktopBreakpoint';
import mobileBreakpoint from '_util/responsiveDesign/mobileBreakpoint';
import tabletBreakpoint from '_util/responsiveDesign/tabletBreakpoint';

/**
 * Section.
 */
const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  text-align: center;

  ${mobileBreakpoint`
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 15px;
    padding-right: 15px;
  `}

  ${tabletBreakpoint`
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 50px;
    padding-right: 50px;
  `}

  ${desktopBreakpoint`
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 50px;
    padding-right: 50px;
  `}
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
  <Section>
    <Margin>
      <Name>Jon Balon</Name>

      <Position>Front-End Web Developer</Position>

      <Tagline>
        I am a Front-End Web Developer who builds modern web applications with
        the latest technologies.
      </Tagline>
    </Margin>
  </Section>
);

export default LandingSection;
