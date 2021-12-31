import React, { useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';

import { Page } from '_templates/Pages/Home';
import AboutMeSection from '_sections/AboutMe';
import FooterSection from '../sections/Footer';
import GlobalStyle from '_styles/Global';
import LandingSection from '_sections/Landing';
import ProjectsSection from '_sections/Projects';
import WorkExperienceSection from '_sections/WorkExperience';

// Options for the scrollIntoView function.
const scrollIntoViewOptions = {
  behavior: 'smooth',
  block: 'start',
  inline: 'start',
};

/**
 * Home page.
 *
 * @returns {React.Component} Home page.
 */
const HomePage = props => {
  // Refs to sections.
  const refLandingSection = useRef(null);
  const refAboutMeSection = useRef(null);
  const refWorkExperienceSection = useRef(null);
  const refProjectsSection = useRef(null);

  /**
   * Scrolls to the About Me section.
   */
  const scrollToAboutMeSection = useCallback(() => {
    refAboutMeSection.current.scrollIntoView(scrollIntoViewOptions);
    window.history.pushState({}, '', '/');
  }, []);

  /**
   * Scrolls to the Work Experience section.
   */
  const scrollToWorkExperienceSection = useCallback(() => {
    refWorkExperienceSection.current.scrollIntoView(scrollIntoViewOptions);
    window.history.pushState({}, '', '/');
  }, []);

  /**
   * Scrolls to the Projects section.
   */
  const scrollToProjectsSection = useCallback(() => {
    refProjectsSection.current.scrollIntoView(scrollIntoViewOptions);
    window.history.pushState({}, '', '/');
  }, []);

  return (
    <Page>
      <Helmet>
        <title>Jon Balon &mdash; Front-End Web Developer</title>
      </Helmet>
      <GlobalStyle />

      <LandingSection
        ref={refLandingSection}
        scrollToAboutMeSection={scrollToAboutMeSection}
      />
      <AboutMeSection
        ref={refAboutMeSection}
        scrollToWorkExperienceSection={scrollToWorkExperienceSection}
      />
      <WorkExperienceSection
        ref={refWorkExperienceSection}
        scrollToProjectsSection={scrollToProjectsSection}
      />
      <ProjectsSection ref={refProjectsSection} />
      <FooterSection />
    </Page>
  );
};

export default HomePage;
