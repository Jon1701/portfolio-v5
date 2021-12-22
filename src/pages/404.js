import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import GlobalStyle from '_styles/Global';
import InternalLinkButton from '_components/Buttons/Button/InternalLink';

/**
 * Component container.
 */
const Container = styled.main`
  background-color: #232023;
  color: #fff;
  min-height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

/**
 * Custom H1 component.
 */
const H1 = styled.h1`
  margin-top: 0;
`;

/**
 * 404 Not Found page.
 *
 * @returns {React.Component} 404 Not Found page.
 */
const NotFoundPage = () => (
  <Container>
    <Helmet>
      <title>Page not found</title>
    </Helmet>

    <GlobalStyle />

    <H1>404</H1>

    <p>The page you are looking for does not exist.</p>

    <InternalLinkButton to="/">Go Back to the Home Page</InternalLinkButton>
  </Container>
);

export default NotFoundPage;
