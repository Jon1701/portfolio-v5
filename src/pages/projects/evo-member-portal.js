import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import {
  Page,
  Margin,
  ReturnToProjectsSectionLink,
} from '_templates/Pages/Project';
import {
  Section,
  H1,
  H2,
  TechnologiesGrid,
} from '_templates/Sections/ProjectPage';
import { TechnologyLogo, technologyEnums } from '_components/TechnologyLogo';
import GlobalStyle from '_styles/Global';
import ImageCarousel from '_components/ImageCarousel';
import loadStaticAsset from '_util/loadStaticAsset';

/**
 * Container for the grid of technologies.
 */
const ContainerGrid = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

// Images to be displayed in the carousel.
const images = [
  {
    title: 'Sign up for an account',
    src: loadStaticAsset('ProjectScreenshot-EVOMemberPortal-Public-Signup'),
  },
  {
    title: 'Confirm your email address',
    src: loadStaticAsset('ProjectScreenshot-EVOMemberPortal-ConfirmEmail'),
  },
  {
    title: 'Email address confirmed',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOMemberPortal-ConfirmEmail-Success'
    ),
  },
  {
    title: 'Log in to your account',
    src: loadStaticAsset('ProjectScreenshot-EVOMemberPortal-Public-Login'),
  },
  {
    title: 'Initial setup wizard — Select a subscription',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOMemberPortal-Wizard-SelectSubscription'
    ),
  },
  {
    title: 'Initial setup wizard — Provide site details',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOMemberPortal-Wizard-RegisterWebsite'
    ),
  },
  {
    title: 'Initial setup wizard — Enter payment information',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOMemberPortal-Wizard-RegisterPaymentInformation'
    ),
  },
  {
    title: 'Member Portal — Dashboard',
    src: loadStaticAsset('ProjectScreenshot-EVOMemberPortal-Dashboard-Home'),
  },
  {
    title: 'Member Portal — List of registered web properties',
    src: loadStaticAsset('ProjectScreenshot-EVOMemberPortal-Dashboard-Sites'),
  },
  {
    title: 'Key and subscription details',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOMemberPortal-Dashboard-SubscriptionDetails'
    ),
  },
  {
    title:
      'Key and subscription details with Google Analytics and Google Search Console integrations',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOMemberPortal-Dashboard-SubscriptionDetails-GoogleConnected'
    ),
  },
  {
    title: 'Could not access Google Analytics and Google Search Console',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOMemberPortal-Dashboard-SubscriptionDetails-GoogleErrored'
    ),
  },
];

// Technologies used.
const technologiesUsed = [
  technologyEnums.html5,
  technologyEnums.javascript,
  technologyEnums.css3,
  technologyEnums.react,
  technologyEnums.reactRouter,
  technologyEnums.redux,
  technologyEnums.chartjs,
  technologyEnums.sass,
  technologyEnums.postcss,
  technologyEnums.eslint,
  technologyEnums.stylelint,
  technologyEnums.docker,
  technologyEnums.webpack,
  technologyEnums.babel,
  technologyEnums.mocha,
  technologyEnums.git,
];

/**
 * Project Details page for the EVO Member Portal.
 *
 * @returns {React.Component} Project Details Page.
 */
const EVOMemberPortalProjectDetailsPage = () => (
  <Page>
    <Helmet>
      <title>EVO Member Portal &mdash; Project Details</title>
    </Helmet>

    <GlobalStyle />

    <Margin>
      <Section>
        <H1 textAlign="center" marginTop="0px">
          EVO Member Portal
        </H1>
      </Section>

      <Section>
        <H2>What was the EVO Member Portal?</H2>
        <p>
          The EVO Member Portal was a companion website to the EVO SEO WordPress
          plugin. It provided services such as seamless Google Analytics and
          Google Search Console integrations.
        </p>
        <p>
          In the future, it was planned to have functionality to crawl a
          website, run a performance analysis, and find potential issues which
          could impact SEO and page load times such as Time-to-first-paint
          (TTFP), suggest lazy-loading and compression of media, and suggest
          optimization for mobile/tablet devices.
        </p>
      </Section>

      <Section>
        <H2>Technologies Used</H2>

        <ContainerGrid>
          <TechnologiesGrid>
            {technologiesUsed.map(item => (
              <TechnologyLogo
                key={item}
                technologyEnum={item}
                iconHeight="50px"
                maxIconHeight="50px"
              />
            ))}
          </TechnologiesGrid>
        </ContainerGrid>
      </Section>

      <Section>
        <H2>Screenshots</H2>

        <ImageCarousel images={images} />
      </Section>

      <ReturnToProjectsSectionLink />
    </Margin>
  </Page>
);

export default EVOMemberPortalProjectDetailsPage;
