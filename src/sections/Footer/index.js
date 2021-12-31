import React from 'react';
import styled from 'styled-components';

import { H2 } from '_templates/Sections/MainPage';
import { Margin } from '_templates/Pages/Home';
import desktopBreakpoint from '_util/responsiveDesign/desktopBreakpoint';
import GitHubIcon from '_images/icons/GitHub';
import LinkedInIcon from '_images/icons/LinkedIn';
import mobileBreakpoint from '_util/responsiveDesign/mobileBreakpoint';
import tabletBreakpoint from '_util/responsiveDesign/tabletBreakpoint';

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
 * Custom Paragraph component.
 */
const Paragraph = styled.p`
  ${mobileBreakpoint`
    text-align: center;
  `}

  ${tabletBreakpoint`
    text-align: left;
  `}

  ${desktopBreakpoint`
    text-align: left;
  `}
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
  padding: 25px 0;
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

      <Paragraph>
        I am currently seeking a job as a remote Front-End React Developer. So,
        if you like my portfolio and think I am suited for a position at your
        company, let's get in touch:
      </Paragraph>

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

      <ContainerCopyright>&copy; 2022 Jon Balon</ContainerCopyright>
    </Margin>
  </Container>
);

export default Footer;
