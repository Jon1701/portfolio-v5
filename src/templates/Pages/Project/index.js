import styled from 'styled-components';

import HIXSEvolutionPattern from '_images/patterns/hixs_pattern_evolution.png';
import desktopBreakpoint from '_util/responsiveDesign/desktopBreakpoint';
import mobileBreakpoint from '_util/responsiveDesign/mobileBreakpoint';
import tabletBreakpoint from '_util/responsiveDesign/tabletBreakpoint';

/**
 * Page template.
 */
const Page = styled.main`
  background-image: url(${HIXSEvolutionPattern});
  background-attachment: fixed;
  padding-top: 35px;

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

export { Page, Margin };
