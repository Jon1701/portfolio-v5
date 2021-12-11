import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Section component.
 *
 * @param {object} props Component props.
 * @param {string} props.minHeight CSS Minimum Height value.
 * @returns {React.Component} Section component.
 */
const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  min-height: ${props => props.minHeight || 'auto'};
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
  max-width: 800px;
  width: 100%;
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
