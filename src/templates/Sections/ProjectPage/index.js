import styled from 'styled-components';

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

  min-height: ${props => props.minHeight || 'auto'};
`;

/**
 * Heading level 1.
 */
const H1 = styled.h1`
  font-size: 2em;
  text-align: ${props => props.textAlign || 'auto'};
  margin-top: ${props => props.marginTop || '.67em'};
  margin-bottom: ${props => props.marginBottom || '.67em'};
`;

/**
 * Heading level 2.
 */
const H2 = styled.h2`
  font-size: 1.5em;
  text-align: ${props => props.textAlign || 'auto'};
  margin-top: ${props => props.marginTop || '.75em'};
  margin-bottom: ${props => props.marginBottom || '.75em'};
`;

/**
 * Heading level 3.
 */
const H3 = styled.h3`
  font-size: 1.3em;
  text-align: ${props => props.textAlign || '.83em'};
  margin-top: ${props => props.marginTop || '.83em'};
  margin-bottom: ${props => props.marginBottom || 'auto'};
`;

/**
 * Heading level 4.
 */
const H4 = styled.h4`
  font-size: 1em;
  text-align: ${props => props.textAlign || 'auto'};
  margin-top: ${props => props.marginTop || '1.12em'};
  margin-bottom: ${props => props.marginBottom || '1.12em'};
`;

/**
 * Heading level 5.
 */
const H5 = styled.h5`
  font-size: 0.8em;
  text-align: ${props => props.textAlign || 'auto'};
  margin-top: ${props => props.marginTop || '1.5em'};
  margin-bottom: ${props => props.marginBottom || '1.5em'};
`;

/**
 * Heading level 6.
 */
const H6 = styled.h6`
  font-size: 0.7em;
  text-align: ${props => props.textAlign || 'auto'};
  margin-top: ${props => props.marginTop || '1.67em'};
  margin-bottom: ${props => props.marginBottom || '1.67em'};
`;

export { Section, H1, H2, H3, H4, H5, H6 };
