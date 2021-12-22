import styled from 'styled-components';
import PropTypes from 'prop-types';

import desktopBreakpoint from '_util/responsiveDesign/desktopBreakpoint';
import mobileBreakpoint from '_util/responsiveDesign/mobileBreakpoint';
import tabletBreakpoint from '_util/responsiveDesign/tabletBreakpoint';

/**
 * Section component.
 *
 * @param {object} props Component props.
 * @param {string} props.minHeight CSS Minimum Height value.
 * @returns {React.Component} Section component.
 */
const Section = styled.section`
  min-height: ${props => props.minHeight};
`;

Section.propTypes = {
  minHeight: PropTypes.string,
};

Section.defaultProps = {
  minHeight: 'auto',
};

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
 * Heading level 1.
 */
const H1 = styled.h1`
  font-size: 2em;
`;

/**
 * Heading level 2.
 */
const H2 = styled.h2`
  font-size: 1.5em;
`;

/**
 * Heading level 3.
 */
const H3 = styled.h3`
  font-size: 1.3em;
`;

/**
 * Heading level 4.
 */
const H4 = styled.h4`
  font-size: 1em;
`;

/**
 * Heading level 5.
 */
const H5 = styled.h5`
  font-size: 0.8em;
`;

/**
 * Heading level 6.
 */
const H6 = styled.h6`
  font-size: 0.7em;
`;

export { Section, Margin, H1, H2, H3, H4, H5, H6 };
