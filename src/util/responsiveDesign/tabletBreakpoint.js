import breakpoints from '_util/responsiveDesign/breakpoints';

/**
 * Generates CSS rules for the Tablet Breakpoint.
 *
 * @param {string} rules CSS rules.
 * @returns {string} CSS rules for the Tablet Breakpoint.
 */
const tabletBreakpoint = rules =>
  `@media all and (min-device-width: ${breakpoints.tablet.min}px) and (max-device-width: ${breakpoints.tablet.max}px) {${rules}}`;

export default tabletBreakpoint;
