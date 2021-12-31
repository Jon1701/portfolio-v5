import styled from 'styled-components';

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

export { Page };
