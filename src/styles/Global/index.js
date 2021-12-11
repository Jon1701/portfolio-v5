import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { ZenMaruGothicRegular } from '_fonts/FontFaces/ZenMaruGothic';

/**
 * Define Global Stylesheet for the body tag.
 */
const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;

    margin: 0;

    font-family: 'Zen Maru Gothic Regular', sans-serif;
    font-size: 1rem;
  }
`;

/**
 * Combines the Global Stylesheet with a font-face rule.
 *
 * @returns {React.Component} Combined Stylesheet with font-face rule.
 */
const Wrapper = () => (
  <React.Fragment>
    <ZenMaruGothicRegular />
    <GlobalStyle />
  </React.Fragment>
);

export default Wrapper;
