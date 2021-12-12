import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SVGCSS3 from '_images/svg/css3.svg';
import SVGDebian from '_images/svg/debian.svg';
import SVGDocker from '_images/svg/docker.svg';
import SVGESLint from '_images/svg/eslint.svg';
import SVGGatsby from '_images/svg/gatsby.svg';
import SVGGit from '_images/svg/git.svg';
import SVGHTML5 from '_images/svg/html5.svg';
import SVGJavaScript from '_images/svg/javascript.svg';
import SVGJest from '_images/svg/jest.svg';
import SVGNodeJS from '_images/svg/nodejs.svg';
import SVGPHP from '_images/svg/php.svg';
import SVGPrettier from '_images/svg/prettier.svg';
import SVGReact from '_images/svg/react.svg';
import SVGReactRouter from '_images/svg/react-router.svg';
import SVGRedux from '_images/svg/redux.svg';
import SVGStyledComponents from '_images/svg/styled-components.svg';
import SVGStylelint from '_images/svg/stylelint.svg';
import SVGWebpack from '_images/svg/webpack.svg';
import SVGWordPress from '_images/svg/wordpress.svg';

/**
 * Component container.
 */
const Container = styled.span`
  text-align: center;
`;

/**
 * Container for the SVG.
 */
const ContainerSVG = styled.div``;

/**
 * Technology name.
 */
const ContainerName = styled.div``;

/**
 * Custom image component.
 */
const Image = styled.img`
  width: auto;
  height: ${props => props.iconHeight || '75px'};

  max-width: 100%;
  max-height: ${props => props.maxIconHeight || 'auto'};
`;

// Accepted enums.
const enums = Object.freeze({
  css3: 'css3',
  debian: 'debian',
  docker: 'docker',
  eslint: 'eslint',
  gatsby: 'gatsby',
  git: 'git',
  html5: 'html5',
  javascript: 'javascript',
  jest: 'jest',
  node: 'node',
  php: 'php',
  prettier: 'prettier',
  reactRouter: 'react-router',
  react: 'react',
  redux: 'redux',
  styledComponents: 'styled-components',
  stylelint: 'stylelint',
  webpack: 'webpack',
  wordpress: 'wordpress',
});

// Defines the path to the SVG and the technology name
// associated with a technology enum.
const definitions = {
  [enums.css3]: {
    src: SVGCSS3,
    name: 'CSS',
  },
  [enums.debian]: {
    src: SVGDebian,
    name: 'Debian',
  },
  [enums.docker]: {
    src: SVGDocker,
    name: 'Docker',
  },
  [enums.eslint]: {
    src: SVGESLint,
    name: 'ESLint',
  },
  [enums.gatsby]: {
    src: SVGGatsby,
    name: 'GatsbyJS',
  },
  [enums.git]: {
    src: SVGGit,
    name: 'Git',
  },
  [enums.html5]: {
    src: SVGHTML5,
    name: 'HTML5',
  },
  [enums.javascript]: {
    src: SVGJavaScript,
    name: 'JavaScript (ES6+)',
  },
  [enums.jest]: {
    src: SVGJest,
    name: 'Jest',
  },
  [enums.node]: {
    src: SVGNodeJS,
    name: 'Node.js',
  },
  [enums.php]: {
    src: SVGPHP,
    name: 'PHP',
  },
  [enums.prettier]: {
    src: SVGPrettier,
    name: 'Prettier',
  },
  [enums.reactRouter]: {
    src: SVGReactRouter,
    name: 'React Router',
  },
  [enums.react]: {
    src: SVGReact,
    name: 'React',
  },
  [enums.redux]: {
    src: SVGRedux,
    name: 'Redux',
  },
  [enums.styledComponents]: {
    src: SVGStyledComponents,
    name: 'Styled Components',
  },
  [enums.stylelint]: {
    src: SVGStylelint,
    name: 'Stylelint',
  },
  [enums.webpack]: {
    src: SVGWebpack,
    name: 'Webpack',
  },
  [enums.wordpress]: {
    src: SVGWordPress,
    name: 'WordPress',
  },
};

/**
 * Displays a technology logo and name which corresponds to a given enum.
 *
 * @param {object} props Component props.
 * @param {string} props.technologyEnum Enum.
 * @param {string} props.iconHeight Icon CSS height property.
 * @param {string} props.maxIconHeight Icon CSS maximum height property.
 * @returns {React.Component} Technology logo.
 */
const TechnologyLogo = ({ technologyEnum, iconHeight, maxIconHeight }) => (
  <Container>
    <ContainerSVG>
      <Image
        src={definitions[technologyEnum].src}
        alt={definitions[technologyEnum].name}
        iconHeight={iconHeight}
        maxIconHeight={maxIconHeight}
      />
    </ContainerSVG>
    <ContainerName>{definitions[technologyEnum].name}</ContainerName>
  </Container>
);

TechnologyLogo.propTypes = {
  technologyEnum: PropTypes.oneOf(Object.values(enums)),
  iconHeight: PropTypes.string,
  maxIconHeight: PropTypes.string,
};

export { TechnologyLogo, enums as technologyEnums };
