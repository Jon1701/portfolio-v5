import breakpoints from '_util/responsiveDesign/breakpoints';

/**
 * Generates CSS rules for the Desktop Breakpoint.
 *
 * @param {string} rules CSS rules.
 * @returns {string} CSS rules for the Desktop Breakpoint.
 */
const desktopBreakpoint = rules =>
  `@media all and (min-device-width: ${breakpoints.desktop.min}px) {${rules}}`;

export default desktopBreakpoint;
