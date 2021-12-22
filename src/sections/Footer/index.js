import React from 'react';
import styled from 'styled-components';

import { Margin, H2 } from '_templates/Sections/MainPage';
import GitHubIcon from '_images/icons/GitHub';
import LinkedInIcon from '_images/icons/LinkedIn';

import ExternalLink from './components/ExternalLink';

/**
 * Component container.
 */
const Container = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

/**
 * Custom heading.
 */
const CustomH2 = styled(H2)`
  text-align: center;
`;

/**
 * Container for the external links.
 */
const ContainerExternalLinks = styled.div`
  margin-top: 25px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;

/**
 * Container for the copyright.
 */
const ContainerCopyright = styled.div`
  text-align: center;
  padding: 25px;
`;

/**
 * Footer.
 *
 * @returns {React.Component} Footer.
 */
const Footer = () => (
  <Container>
    <Margin>
      <CustomH2>Let's Work Together</CustomH2>

      <p>
        I am currently seeking a job as a remote Front-End React Developer. So,
        if you like my portfolio and think I am suited for a position at your
        company, let's get in touch:
      </p>

      <ContainerExternalLinks>
        <ExternalLink
          JSXIcon={<GitHubIcon fillColor="#fff" />}
          name="GitHub"
          href="https://github.com/Jon1701"
        />
        <ExternalLink
          JSXIcon={<LinkedInIcon fillColor="#fff" />}
          name="LinkedIn"
          href="https://www.linkedin.com/in/jonbalon"
        />
      </ContainerExternalLinks>

      <ContainerCopyright>&copy; 2022 &mdash; Jon Balon</ContainerCopyright>
    </Margin>
  </Container>
);

export default Footer;
