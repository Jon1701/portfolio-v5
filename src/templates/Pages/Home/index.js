import styled from 'styled-components';

import desktopBreakpoint from '_util/responsiveDesign/desktopBreakpoint';
import mobileBreakpoint from '_util/responsiveDesign/mobileBreakpoint';
import tabletBreakpoint from '_util/responsiveDesign/tabletBreakpoint';
import WP1851978 from '_images/wallpapers/wp1851978-polygon-wallpapers.png';

/**
 * Component container.
 */
const Page = styled.main`
  background-image: url(${WP1851978});
  background-attachment: fixed;
  background-size: cover;

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

  padding-top: 35px;
  padding-bottom: 35px;
`;

export { Page, Margin };
