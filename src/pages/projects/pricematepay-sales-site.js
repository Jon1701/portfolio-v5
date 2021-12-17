import React from 'react';
import styled from 'styled-components';

import { Page, Margin } from '_templates/Pages/Project';
import { Section, H1, H2 } from '_templates/Sections/ProjectPage';
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

/**
 * Grid of technologies.
 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 75px 75px 75px 75px 75px 75px;
  column-gap: 15px;
  row-gap: 15px;
`;

// Images to be displayed in the carousel.
const images = [
  {
    title: '(Desktop Design) Homepage',
    src: loadStaticAsset('ProjectScreenshot-PMPSalesSite-DesktopDesign-Home'),
  },
  {
    title: '(Desktop Design) Learn how to accept payments for less',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-DesktopDesign-Products-Payments'
    ),
  },
  {
    title: '(Desktop Design) Learn how to bill customers and clients',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-DesktopDesign-Products-Billing'
    ),
  },
  {
    title: '(Desktop Design) Learn about our Virtual Terminal',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-DesktopDesign-Products-MerchantServices'
    ),
  },
  {
    title: '(Desktop Design) Fees at a glance',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-DesktopDesign-Products-Pricing'
    ),
  },
  {
    title: '(Desktop Design) About Pricematepay',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-DesktopDesign-Company-AboutUs'
    ),
  },
  {
    title: '(Desktop Design) Contact our sales team',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-DesktopDesign-Company-Contact'
    ),
  },
  {
    title: '(Mobile Design) Homepage',
    src: loadStaticAsset('ProjectScreenshot-PMPSalesSite-MobileDesign-Home'),
  },
  {
    title: '(Mobile Design) Expanded navigation bar',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-MobileDesign-Home-NavigationBar'
    ),
  },
  {
    title: '(Mobile Design) Learn how to process payments for less',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-MobileDesign-Products-Payments'
    ),
  },
  {
    title: '(Mobile Design) Learn how to bill customers and clients',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-MobileDesign-Products-Billing'
    ),
  },
  {
    title: '(Mobile Design) Learn about our Virtual Terminal',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-MobileDesign-Products-MerchantServices'
    ),
  },
  {
    title: '(Mobile Design) Fees at a glance',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-MobileDesign-Products-Pricing'
    ),
  },
  {
    title: '(Mobile Design) About Pricematepay',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-MobileDesign-Company-AboutUs'
    ),
  },
  {
    title: '(Mobile Design) Contact our sales team',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-MobileDesign-Company-ContactUs'
    ),
  },
  {
    title: '(Tablet Design) Homepage',
    src: loadStaticAsset('ProjectScreenshot-PMPSalesSite-TabletDesign-Home'),
  },
  {
    title: '(Tablet Design) Expanded navigation bar',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-TabletDesign-Home-NavigationBar'
    ),
  },
  {
    title: '(Tablet Design) Learn how to accept payments for less',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-TabletDesign-Products-Payments'
    ),
  },
  {
    title: '(Tablet Design) Learn how to bill customers and clients',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-TabletDesign-Products-Billing'
    ),
  },
  {
    title: '(Tablet Design) Learn about our Virtual Terminal',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-TabletDesign-Products-MerchantServices'
    ),
  },
  {
    title: '(Tablet Design) Fees at a glance',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-TabletDesign-Products-Pricing'
    ),
  },
  {
    title: '(Tablet Design) About Pricematepay',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-TabletDesign-Company-AboutUs'
    ),
  },
  {
    title: '(Tablet Design) Contact our sales team',
    src: loadStaticAsset(
      'ProjectScreenshot-PMPSalesSite-TabletDesign-Company-ContactUs'
    ),
  },
];

// Technologies used.
const technologiesUsed = [
  technologyEnums.html5,
  technologyEnums.javascript,
  technologyEnums.css3,
  technologyEnums.gatsby,
  technologyEnums.react,
  technologyEnums.sass,
  technologyEnums.eslint,
  technologyEnums.stylelint,
  technologyEnums.docker,
  technologyEnums.git,
];

/**
 * Project Details page for the Pricematepay Sales Site.
 *
 * @returns {React.Component} Details page.
 */
const PricematepaySalesSiteProjectDetailsPage = () => (
  <Page>
    <GlobalStyle />

    <Margin>
      <Section>
        <H1 textAlign="center">Pricematepay Sales Site</H1>
      </Section>

      <Section>
        <H2>What is the Pricematepay Sales Site?</H2>
        <p>
          The Pricematepay Sales Site was used to help the Sales team in client
          acquisition, and showcase the features of the Pricematepay Gateway.
        </p>
      </Section>

      <Section>
        <H2>Technologies Used</H2>

        <ContainerGrid>
          <Grid>
            {technologiesUsed.map(item => (
              <TechnologyLogo
                key={item}
                technologyEnum={item}
                iconHeight="50px"
                maxIconHeight="50px"
              />
            ))}
          </Grid>
        </ContainerGrid>
      </Section>

      <Section>
        <H2>Screenshots</H2>

        <ImageCarousel images={images} />
      </Section>
    </Margin>
  </Page>
);

export default PricematepaySalesSiteProjectDetailsPage;
