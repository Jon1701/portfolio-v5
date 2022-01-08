import React from 'react';

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
  technologyEnums.expressjs,
  technologyEnums.eslint,
  technologyEnums.stylelint,
  technologyEnums.prettier,
  technologyEnums.formatjs,
  technologyEnums.debian,
  technologyEnums.docker,
  technologyEnums.gatsby,
  technologyEnums.git,
  technologyEnums.jest,
  technologyEnums.styledComponents,
  technologyEnums.webpack,
  technologyEnums.postgres,
  technologyEnums.mysql,
  technologyEnums.php,
  technologyEnums.wordpress,
];

/**
 * Generate a table of technologies used.
 *
 * @returns {React.Component} Table of technologies used.
 */
const Technologies = () =>
  arrayTechnologiesUsed.map(item => (
    <TechnologyLogo key={item} technologyEnum={item} />
  ));

export default Technologies;
