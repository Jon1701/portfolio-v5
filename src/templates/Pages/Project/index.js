import styled from 'styled-components';

import HIXSEvolutionPattern from '_images/patterns/hixs_pattern_evolution.png';

/**
 * Page template.
 */
const Page = styled.main`
  background-image: url(${HIXSEvolutionPattern});
  background-attachment: fixed;

  color: #fff;
  min-height: 100vh;
`;

/**
 * Section margin.
 */
const Margin = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 0;

  width: 100%;
`;

export { Page, Margin };
