import React from 'react';
import styled from 'styled-components';

import desktopBreakpoint from '_util/responsiveDesign/desktopBreakpoint';
import InternalLink from '_components/Links/InternalLink';
import mobileBreakpoint from '_util/responsiveDesign/mobileBreakpoint';
import tabletBreakpoint from '_util/responsiveDesign/tabletBreakpoint';
import WP1851977 from '_images/wallpapers/wp1851977-polygon-wallpapers.png';

/**
 * Page template.
 */
const Page = styled.main`
  background-image: url(${WP1851977});
  background-attachment: fixed;
  background-size: cover;

  padding-top: 35px;
  padding-bottom: 100px;

  color: #fff;
`;

/**
 * Section margin.
 */
const Margin = styled.div`
  ${mobileBreakpoint`
    margin-left: 10px;
    margin-right: 10px;
  `}

  ${tabletBreakpoint`
    margin-left: 50px;
    margin-right: 50px;
  `}

  ${desktopBreakpoint`
    max-width: 900px;
    margin: 0 auto;
  `}
`;

/**
 * Link which returns the user to the Projects section on the home page.
 *
 * @returns {React.Component} Link.
 */
const ReturnToProjectsSectionLink = () => (
  <div style={{ marginTop: '100px', textAlign: 'center' }}>
    <InternalLink to="/#projects">&larr; Return to Projects</InternalLink>
  </div>
);

export { Page, Margin, ReturnToProjectsSectionLink };
