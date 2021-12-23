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
    title: 'Just a simple landing page',
    src: loadStaticAsset('ProjectScreenshot-NavGroupWebsite-Home'),
  },
];

// Technologies used.
const technologiesUsed = [
  technologyEnums.html5,
  technologyEnums.javascriptES5,
  technologyEnums.css3,
];

/**
 * Project Details page for the Navigate Group Website.
 *
 * @returns {React.Component} Details page.
 */
const NavigateGroupWebsiteProjectDetailsPage = () => (
  <Page>
    <Helmet>
      <title>Navigate Group Website &mdash; Project Details</title>
    </Helmet>

    <GlobalStyle />

    <Margin>
      <Section>
        <H1 textAlign="center" marginTop="0px">
          Navigate Group Website
        </H1>
      </Section>

      <Section>
        <H2>What was the Navigate Group Website?</H2>
        <p>
          The website was a simple placeholder design I was asked to implement
          on behalf of Navigate Group in anticipation for potential clients.
          Executives did not want potential clients to see a blank page on the
          website.
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
export default NavigateGroupWebsiteProjectDetailsPage;
