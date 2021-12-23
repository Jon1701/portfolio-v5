import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SVGAutoprefixer from '_images/svg/autoprefixer.svg';
import SVGBabel from '_images/svg/babel.svg';
import SVGChaiJS from '_images/svg/chaijs.svg';
import SVGChartJS from '_images/svg/chartjs.svg';
import SVGCSS3 from '_images/svg/css3.svg';
import SVGDebian from '_images/svg/debian.svg';
import SVGDocker from '_images/svg/docker.svg';
import SVGESLint from '_images/svg/eslint.svg';
import SVGGatsby from '_images/svg/gatsby.svg';
import SVGGit from '_images/svg/git.svg';
import SVGGulp from '_images/svg/gulp.svg';
import SVGHTML5 from '_images/svg/html5.svg';
import SVGJavaScript from '_images/svg/javascript.svg';
import SVGJest from '_images/svg/jest.svg';
import SVGjQuery from '_images/svg/jquery.svg';
import SVGMocha from '_images/svg/mocha.svg';
import SVGMySQL from '_images/svg/mysql.svg';
import SVGNodeJS from '_images/svg/nodejs.svg';
import SVGPHP from '_images/svg/php.svg';
import SVGPHPUnit from '_images/svg/phpunit.svg';
import SVGPostCSS from '_images/svg/postcss.svg';
import SVGPrettier from '_images/svg/prettier.svg';
import SVGReact from '_images/svg/react.svg';
import SVGReactRouter from '_images/svg/react-router.svg';
import SVGRedux from '_images/svg/redux.svg';
import SVGSass from '_images/svg/sass.svg';
import SVGStyledComponents from '_images/svg/styled-components.svg';
import SVGStylelint from '_images/svg/stylelint.svg';
import SVGTravis from '_images/svg/travis.svg';
import SVGWebpack from '_images/svg/webpack.svg';
import SVGWordPress from '_images/svg/wordpress.svg';

/**
 * Component container.
 */
const Container = styled.span``;

/**
 * Container for the SVG.
 */
const ContainerSVG = styled.div`
  text-align: center;
`;

/**
 * Technology name.
 */
const ContainerName = styled.div`
  text-align: center;
  word-break: break-word;
`;

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
  autoprefixer: 'autoprefixer',
  babel: 'babel',
  chaijs: 'chaijs',
  chartjs: 'chartjs',
  css3: 'css3',
  debian: 'debian',
  docker: 'docker',
  eslint: 'eslint',
  gatsby: 'gatsby',
  git: 'git',
  gulp: 'gulp',
  html5: 'html5',
  javascript: 'javascript',
  javascriptES5: 'javascript-es5',
  jest: 'jest',
  jquery: 'jquery',
  mocha: 'mocha',
  mysql: 'mysql',
  node: 'node',
  php: 'php',
  phpunit: 'phpunit',
  postcss: 'postcss',
  prettier: 'prettier',
  react: 'react',
  reactRouter: 'react-router',
  redux: 'redux',
  sass: 'sass',
  styledComponents: 'styled-components',
  stylelint: 'stylelint',
  travis: 'travis',
  webpack: 'webpack',
  wordpress: 'wordpress',
});

// Defines the path to the SVG and the technology name
// associated with a technology enum.
const definitions = {
  [enums.autoprefixer]: {
    src: SVGAutoprefixer,
    name: 'Autoprefixer',
  },
  [enums.babel]: {
    src: SVGBabel,
    name: 'Babel',
  },
  [enums.chaijs]: {
    src: SVGChaiJS,
    name: 'Chai.js',
  },
  [enums.chartjs]: {
    src: SVGChartJS,
    name: 'Chart.js',
  },
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
  [enums.gulp]: {
    src: SVGGulp,
    name: 'Gulp',
  },
  [enums.html5]: {
    src: SVGHTML5,
    name: 'HTML5',
  },
  [enums.javascript]: {
    src: SVGJavaScript,
    name: 'JavaScript (ES6+)',
  },
  [enums.javascriptES5]: {
    src: SVGJavaScript,
    name: 'JavaScript (ES5)',
  },
  [enums.jest]: {
    src: SVGJest,
    name: 'Jest',
  },
  [enums.jquery]: {
    src: SVGjQuery,
    name: 'jQuery',
  },
  [enums.mocha]: {
    src: SVGMocha,
    name: 'Mocha',
  },
  [enums.mysql]: {
    src: SVGMySQL,
    name: 'MySQL',
  },
  [enums.node]: {
    src: SVGNodeJS,
    name: 'Node.js',
  },
  [enums.php]: {
    src: SVGPHP,
    name: 'PHP',
  },
  [enums.phpunit]: {
    src: SVGPHPUnit,
    name: 'PHPUnit',
  },
  [enums.postcss]: {
    src: SVGPostCSS,
    name: 'PostCSS',
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
  [enums.sass]: {
    src: SVGSass,
    name: 'Sass',
  },
  [enums.styledComponents]: {
    src: SVGStyledComponents,
    name: 'Styled Components',
  },
  [enums.stylelint]: {
    src: SVGStylelint,
    name: 'Stylelint',
  },
  [enums.travis]: {
    src: SVGTravis,
    name: 'TravisCI',
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
