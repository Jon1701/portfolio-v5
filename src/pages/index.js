import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import AboutMeSection from '_sections/AboutMe';
import FooterSection from '../sections/Footer';
import GlobalStyle from '_styles/Global';
import HIXSPatternEvolution from '_images/patterns/hixs_pattern_evolution.png';
import LandingSection from '_sections/Landing';
import ProjectsSection from '_sections/Projects';
import WorkExperienceSection from '_sections/WorkExperience';

/**
 * Component container.
 */
const Main = styled.main`
  background-image: url(${HIXSPatternEvolution});
  background-attachment: fixed;

  color: #fff;
`;

/**
 * Index page.
 *
 * @returns {React.Component} Index page.
 */
const IndexPage = () => (
  <Main>
    <Helmet>
      <title>Jon Balon &mdash; Front-End Web Developer</title>
    </Helmet>
    <GlobalStyle />

    <LandingSection />
    <AboutMeSection />
    <WorkExperienceSection />
    <ProjectsSection />
    <FooterSection />
  </Main>
);

export default IndexPage;
