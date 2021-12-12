import React from 'react';
import PropTypes from 'prop-types';

import { TechnologyLogo, technologyEnums } from '_components/TechnologyLogo';

// Array of technologies used.
const arrayTechnologiesUsed = [
  technologyEnums.html5,
  technologyEnums.javascript,
  technologyEnums.css3,
  technologyEnums.react,
  technologyEnums.redux,
  technologyEnums.reactRouter,
  technologyEnums.node,
  technologyEnums.eslint,
  technologyEnums.stylelint,
  technologyEnums.prettier,
  technologyEnums.debian,
  technologyEnums.docker,
  technologyEnums.gatsby,
  technologyEnums.git,
  technologyEnums.jest,
  technologyEnums.styledComponents,
  technologyEnums.webpack,
  technologyEnums.php,
  technologyEnums.wordpress,
];

/**
 * Generate a table of technologies used.
 *
 * @param {object} props Component props.
 * @returns {React.Component} Table of technologies used.
 */
const Technologies = ({ iconHeight }) =>
  arrayTechnologiesUsed.map(item => (
    <TechnologyLogo
      key={item}
      technologyEnum={item}
      iconHeight={iconHeight}
      maxIconHeight={iconHeight}
    />
  ));

Technologies.propTypes = {
  iconHeight: PropTypes.string.isRequired,
};

export default Technologies;
