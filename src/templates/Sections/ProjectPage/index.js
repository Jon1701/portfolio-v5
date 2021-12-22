import styled from 'styled-components';

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

/**
 * Grid for Technologies.
 */
const TechnologiesGrid = styled.div`
  display: grid;

  ${mobileBreakpoint`
    grid-template-columns: 80px 80px 80px;
    grid-gap: 15px;
  `}

  ${tabletBreakpoint`
    grid-template-columns: 100px 100px 100px 100px 100px 100px;
    grid-gap: 10px;
  `}

  ${desktopBreakpoint`
    grid-template-columns: 100px 100px 100px 100px 100px 100px;
    grid-gap: 10px;
  `}
`;

export { Section, H1, H2, H3, H4, H5, H6, TechnologiesGrid };
