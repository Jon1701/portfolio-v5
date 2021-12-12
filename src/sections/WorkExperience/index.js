import React from 'react';
import styled from 'styled-components';

import { Section, Margin, H2 } from '_templates/Sections/MainPage';
import WorkExperienceEntry from '_components/WorkExperience/Entry';

import LogoMansfield from '_images/logo/mansfield.jpg';
import LogoNavigateTechnologies from '_images/logo/navigate-technologies.jpg';
import LogoPricemate from '_images/logo/pricemate.jpg';

/**
 * Custom heading.
 */
const CustomH2 = styled(H2)`
  text-align: center;
`;

/**
 * Work Experience Section.
 *
 * @returns {React.Component} Section.
 */
const WorkExperienceSection = () => (
  <Section minHeight="100vh">
    <Margin>
      <CustomH2>Work Experience</CustomH2>

      <WorkExperienceEntry
        logoSrc={LogoPricemate}
        role="Senior Software Engineer"
        company="Pricematepay Inc."
        start="March 2019"
        end="December 2021">
        <ul>
          <li>
            Built the front-end for the Pricematepay Gateway API which
            faciliated accepting credit card payments and issuing refunds for
            organizations from customers.
          </li>
          <li>
            Organizations could create branded Invoices and have them emailed to
            customers.
          </li>
          <li>
            Customers could pay Hosted Invoices without the need for an account.
          </li>
          <li>
            Also built the Pricematepay Sales Site to help the Sales team
            acquire new clients for Pricematepay
          </li>
        </ul>
      </WorkExperienceEntry>

      <WorkExperienceEntry
        logoSrc={LogoNavigateTechnologies}
        role="Front-End Software Engineer"
        company="Navigate Technologies Inc."
        start="March 2017"
        end="February 2019">
        <ul>
          <li>
            Collaborated with a team of developers to build the EVO WordPress
            SEO Plugin which allowed users to easily manage SEO for their
            WordPress web properties.
          </li>
          <li>
            Also collaborated to develop the EVO Member Portal where users could
            manage and purchase subscription keys for their sites using the
            plugin so that they may take advantage of features such as Google
            Search Console and Google Analytics integrations.
          </li>
          <li>
            Worked on various smaller projects for external clients such as
            building the temporary website for Navigate Group, modifying the
            Magento front-end for the GlasVapor storefront, prevent hot linking
            of resources from outside the Hloom domain, and building the website
            for THIRTY SIX KNOTS
          </li>
          <li>
            Used various static analysis tools such as ESLint, Stylelint,
            Prettier, EditorConfig, and PHP CodeSniffer to maintain consistent
            coding styles between multiple developers
          </li>
          <li>
            Wrote tests for the Mocha, Jest, and PHPUnit testing frameworks to
            ensure code was accurate, and prevent regressions from future
            iterations upon the codebase
          </li>
          <li>
            Performed code reviews for submitted Pull Requests and performed QA
            duties before merging code
          </li>
          <li>Contributed to weekly sprint planning</li>
          <li>
            Contributed to designs by providing feedback on usability and
            functionality
          </li>
        </ul>
      </WorkExperienceEntry>

      <WorkExperienceEntry
        logoSrc={LogoMansfield}
        role="Analytics Developer"
        company="Mansfield Inc."
        start="December 2014"
        end="January 2016">
        <ul>
          <li>
            Developed and deployed a Flask web application on an Amazon EC2
            instance running Debian Server and MongoDB which extracted NHL game
            data, sanitized it, and restructured it for use in an infographic
            which highlighted player and game statistics for hockey games
            featuring the Toronto Maple Leafs
          </li>
          <li>
            Performed ETL processing to migrate client databases onto in-house
            database management systems
          </li>
          <li>
            Developed demos which highlighted the analytical capabilities of the
            agency, not limited to: natural language processing, geospatial
            analytics, and machine learning
          </li>
          <li>
            Performed data analysis on customer data provided by clients, and
            generated various reports containing various key performance
            indicators and metrics as requested by the client
          </li>
          <li>
            Set up and maintained consistent development environments and tools
            on all developer machines, and created and configured the company’s
            SVN repository
          </li>
          <li>
            Designed, tested, and deployed the database architecture used on
            development and production machines within the Analytics Department,
            and maintained security access controls for all users and
            applications
          </li>
        </ul>
      </WorkExperienceEntry>
    </Margin>
  </Section>
);

export default WorkExperienceSection;
