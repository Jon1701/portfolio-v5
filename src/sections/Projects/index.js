import React from 'react';
import styled from 'styled-components';

import { Section, Margin, H2 } from '_templates/Sections/MainPage';
import CardImageEVOMemberPortal from '_images/projects/evo-member-portal/card-image.png';
import CardImageEVOPlugin from '_images/projects/evo-plugin/card-image.png';
import CardImageEVOWebsite from '_images/projects/evo-website/card-image.png';
import CardImageNavigateGroupWebsite from '_images/projects/navigate-group-website/card-image.png';
import CardImagePricematepayDashboard from '_images/projects/pricematepay-dashboard/card-image.png';
import CardImagePricematepayWebsite from '_images/projects/pricematepay-website/card-image.png';
import ProjectCard from '_components/Projects/Card';

/**
 * Custom heading.
 */
const CustomH2 = styled(H2)`
  text-align: center;
`;

/**
 * Projects Section.
 *
 * @returns {React.Component} Section.
 */
const ProjectsSection = () => (
  <Section minHeight="100vh">
    <Margin>
      <CustomH2>Projects</CustomH2>

      <ProjectCard
        name="Pricematepay Gateway Dashboard"
        imageSrc={CardImagePricematepayDashboard}
        urlToProjectDetailsPage="/projects/pricematepay-gateway-dashboard">
        The Pricematepay Gateway dashboard was developed as a way for
        organizations to create and send invoices to customers, as well as
        accept payments via Hosted Invoice functionality.
      </ProjectCard>

      <ProjectCard
        name="Pricematepay Sales Site"
        imageSrc={CardImagePricematepayWebsite}
        urlToProjectDetailsPage="/projects/pricematepay-sales-site">
        The Pricematepay Sales Site was used to help the Sales team in client
        acquisition, and showcase the features of the Pricematepay Gateway.
      </ProjectCard>

      <ProjectCard
        name="EVO WordPress SEO Plugin"
        imageSrc={CardImageEVOPlugin}
        urlToProjectDetailsPage="/projects/evo-plugin">
        The plugin was developed as a simple, easy-to-use, and free solution to
        add SEO to sites running WordPress.
      </ProjectCard>

      <ProjectCard
        name="EVO Member Portal"
        imageSrc={CardImageEVOMemberPortal}
        urlToProjectDetailsPage="/projects/evo-member-portal">
        The Member Portal was a Software-as-a-Service solution for the EVO
        WordPress SEO plugin where users could purchase and manage Subscription
        Keys for their various web properties which used the plugin.
      </ProjectCard>

      <ProjectCard
        name="evoplugin.com"
        imageSrc={CardImageEVOWebsite}
        urlToProjectDetailsPage="/projects/evo-website">
        evoplugin.com served as a product page for the EVO WordPress SEO plugin
        and the EVO SEO Member Portal.
      </ProjectCard>

      <ProjectCard
        name="navigategroup.com"
        imageSrc={CardImageNavigateGroupWebsite}
        urlToProjectDetailsPage="/projects/navigate-group-website">
        navigategroup.com is the website for Navigate Group, a sister company to
        the now defunct Navigate Technologies.
      </ProjectCard>
    </Margin>
  </Section>
);

export default ProjectsSection;
