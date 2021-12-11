import { createGlobalStyle } from 'styled-components';

import ZenMaruGothicBlackTTF from './fonts/ZenMaruGothic-Black.ttf';
import ZenMaruGothicBoldTTF from './fonts/ZenMaruGothic-Bold.ttf';
import ZenMaruGothicLightTTF from './fonts/ZenMaruGothic-Light.ttf';
import ZenMaruGothicMediumTTF from './fonts/ZenMaruGothic-Medium.ttf';
import ZenMaruGothicRegularTTF from './fonts/ZenMaruGothic-Regular.ttf';

/**
 * Font-face rule for the Zen Maru Gothic Black font.
 */
const ZenMaruGothicBlack = createGlobalStyle`
  @font-face {
    font-family: 'Zen Maru Gothic Black';
    src: url(${ZenMaruGothicBlackTTF}) format('truetype');
  }    
`;

/**
 * Font-face rule for the Zen Maru Gothic Bold font.
 */
const ZenMaruGothicBold = createGlobalStyle`
  @font-face {
    font-family: 'Zen Maru Gothic Bold';
    src: url(${ZenMaruGothicBoldTTF}) format('truetype');
  }    
`;

/**
 * Font-face rule for the Zen Maru Gothic Light font.
 */
const ZenMaruGothicLight = createGlobalStyle`
  @font-face {
    font-family: 'Zen Maru Gothic Light';
    src: url(${ZenMaruGothicLightTTF}) format('truetype');
  }    
`;

/**
 * Font-face rule for the Zen Maru Gothic Medium font.
 */
const ZenMaruGothicMedium = createGlobalStyle`
  @font-face {
    font-family: 'Zen Maru Gothic Medium';
    src: url(${ZenMaruGothicMediumTTF}) format('truetype');
  }    
`;

/**
 * Font-face rule for the Zen Maru Gothic Regular font.
 */
const ZenMaruGothicRegular = createGlobalStyle`
  @font-face {
    font-family: 'Zen Maru Gothic Regular';
    src: url(${ZenMaruGothicRegularTTF}) format('truetype');
  }  
`;

export {
  ZenMaruGothicBlack,
  ZenMaruGothicBold,
  ZenMaruGothicLight,
  ZenMaruGothicMedium,
  ZenMaruGothicRegular,
};
