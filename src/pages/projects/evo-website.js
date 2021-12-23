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
    title: 'Homepage highlighting plugin features',
    src: loadStaticAsset('ProjectScreenshot-EVOWebsite-Homepage'),
  },
  {
    title: 'Reasons on why you should purchase a subscription',
    src: loadStaticAsset('ProjectScreenshot-EVOWebsite-WhyEVO'),
  },
  {
    title: 'Features',
    src: loadStaticAsset('ProjectScreenshot-EVOWebsite-Features'),
  },
  {
    title: 'Pricing',
    src: loadStaticAsset('ProjectScreenshot-EVOWebsite-Pricing'),
  },
  {
    title: 'How to get started',
    src: loadStaticAsset('ProjectScreenshot-EVOWebsite-GettingStarted'),
  },
  {
    title: 'Frequently asked questions',
    src: loadStaticAsset('ProjectScreenshot-EVOWebsite-FAQ'),
  },
  {
    title: 'Get in touch to learn more',
    src: loadStaticAsset('ProjectScreenshot-EVOWebsite-Contact'),
  },
];

// Technologies used.
const technologiesUsed = [
  technologyEnums.wordpress,
  technologyEnums.php,
  technologyEnums.mysql,
  technologyEnums.gulp,
  technologyEnums.docker,
  technologyEnums.git,
  technologyEnums.travis,
];

/**
 * Project Details page for the EVO Website Project Page.
 *
 * @returns {React.Component} Details page.
 */
const EVOWebsiteProjectDetailsPage = props => (
  <Page>
    <Helmet>
      <title>EVO Website &mdash; Project Details</title>
    </Helmet>

    <GlobalStyle />

    <Margin>
      <Section>
        <H1 textAlign="center" marginTop="0px">
          EVO Website
        </H1>
      </Section>

      <Section>
        <H2>What was the EVO Website?</H2>
        <p>
          The EVO Website was the product information and sales site for the EVO
          SEO WordPress Plugin and EVO Member Portal. It contained information
          on the features, pricing, and support information for the EVO product
          suite.
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

export default EVOWebsiteProjectDetailsPage;
