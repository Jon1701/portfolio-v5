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
    title:
      'See how your post appears in Google Search results, and make changes for better visibility',
    src: loadStaticAsset('ProjectScreenshot-EVOPlugin-Post-SnippetPreview'),
  },
  {
    title:
      'Create and preview how your post should be displayed when linked on Facebook',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Post-SocialCard-Facebook'
    ),
  },
  {
    title:
      'Create and preview how your post should be displayed when linked on Twitter',
    src: loadStaticAsset('ProjectScreenshot-EVOPlugin-Post-SocialCard-Twitter'),
  },
  {
    title:
      'Generate schema annotations for your post so Google knows what to show next to search results',
    src: loadStaticAsset('ProjectScreenshot-EVOPlugin-Post-SchemaGenerator'),
  },
  {
    title: 'Instruct web crawlers on what aspects of your post to index',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Post-AdvancedManipulations'
    ),
  },
  {
    title:
      'Summary on Organic Web Traffic, Top Performing Keywords, and Landing Pages',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-Overview-Unlocked'
    ),
  },
  {
    title:
      'Subscribe to access Organic Web Traffic, Top Performing Keywords, and Landing Pages',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-Overview-Locked'
    ),
  },
  {
    title: 'Help web crawlers to know all URLs on a website',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-Sitemaps-Active'
    ),
  },
  {
    title: "Don't help web crawlers know all URLs on a website",
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-Sitemaps-Inactive'
    ),
  },
  {
    title:
      'Sitemaps functionality is not available when using Plain permalinks',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-Sitemaps-Errored'
    ),
  },
  {
    title: 'Redirect posts to other posts',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-RedirectManager-Unlocked'
    ),
  },
  {
    title: 'Graphs cost money',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-RedirectManager-Locked'
    ),
  },
  {
    title: 'Redirects not available when using Plain permalinks',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-RedirectManager-Errored'
    ),
  },
  {
    title: 'Manage web crawler traffic',
    src: loadStaticAsset('ProjectScreenshot-EVOPlugin-Dashboard-Crawlers'),
  },
  {
    title: 'Unable to manage web crawler traffic',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-Crawlers-Errored'
    ),
  },
  {
    title: 'Make changes to your htaccess file',
    src: loadStaticAsset('ProjectScreenshot-EVOPlugin-Dashboard-HostEditor'),
  },
  {
    title: 'Unable to make changes to your htaccess file',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-HostEditor-Errored'
    ),
  },
  {
    title: 'Site speed optimizations and cache control',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-SiteSpeedOptimizations-Active'
    ),
  },
  {
    title: 'Unable to control site speed optimizations',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-SiteSpeedOptimizations-Errored'
    ),
  },
  {
    title: 'Settings Dashboard',
    src: loadStaticAsset('ProjectScreenshot-EVOPlugin-Dashboard-Settings'),
  },
  {
    title: 'Settings Dashboard with error',
    src: loadStaticAsset(
      'ProjectScreenshot-EVOPlugin-Dashboard-Settings-Errored'
    ),
  },
];

// Technologies used.
const technologiesUsed = [
  technologyEnums.html5,
  technologyEnums.javascript,
  technologyEnums.css3,
  technologyEnums.jquery,
  technologyEnums.php,
  technologyEnums.wordpress,
  technologyEnums.mysql,
  technologyEnums.chartjs,
  technologyEnums.sass,
  technologyEnums.postcss,
  technologyEnums.eslint,
  technologyEnums.stylelint,
  technologyEnums.docker,
  technologyEnums.webpack,
  technologyEnums.gulp,
  technologyEnums.git,
];

/**
 * Project Details page for the EVO SEO Plugin.
 *
 * @returns {React.Component} Details Page.
 */
const EVOSEOPluginProjectDetailsPage = props => (
  <Page>
    <GlobalStyle />

    <Margin>
      <Section>
        <H1 textAlign="center">EVO SEO WordPress Plugin</H1>
      </Section>

      <Section>
        <H2>What was the EVO SEO WordPress Plugin?</H2>
        <p>
          The EVO SEO WordPress plugin was a free plugin which allowed site
          administrators to add SEO to their WordPress site or blog, without
          advanced knowledge of PHP or the inner workings of WordPress.
        </p>
        <p>
          It was designed to be used in conjunction with the EVO Member Portal.
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

EVOSEOPluginProjectDetailsPage.propTypes = {};

export default EVOSEOPluginProjectDetailsPage;
