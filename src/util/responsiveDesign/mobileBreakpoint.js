import breakpoints from '_util/responsiveDesign/breakpoints';

/**
 * Generates CSS rules for the Mobile Breakpoint.
 *
 * @param {string} rules CSS rules.
 * @returns {string} CSS rules for the Mobile Breakpoint.
 */
const mobileBreakpoint = rules =>
  `@media all and (min-device-width: ${breakpoints.mobile.min}px) and (max-device-width: ${breakpoints.mobile.max}px) {${rules}}`;

export default mobileBreakpoint;
