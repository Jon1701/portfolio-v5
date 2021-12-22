import breakpoints from '_util/responsiveDesign/breakpoints';

/**
 * Generates CSS rules for the Tablet and Desktop Breakpoint.
 *
 * @param {string} rules CSS rules.
 * @returns {string} CSS rules for the Tablet and Desktop Breakpoint.
 */
const tabletAndDesktopBreakpoint = rules =>
  `@media all and (min-device-width: ${breakpoints.tablet.min}px) {${rules}}`;

export default tabletAndDesktopBreakpoint;
