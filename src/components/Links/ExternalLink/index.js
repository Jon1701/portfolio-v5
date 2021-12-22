import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Custom anchor component.
 */
const CustomLink = styled.a`
  font-family: inherit;
  color: inherit;

  cursor: pointer;

  text-decoration: ${props => (props.hideUnderline ? 'none' : 'underline')};
`;

/**
 * External Link.
 *
 * @param {object} props Component props.
 * @param {string} props.href Link destination.
 * @param {boolean} props.hideUnderline Hides the underline text decoration.
 * @param {React.Component} props.children Child nodes to render.
 * @returns {React.Component} External link.
 */
const ExternalLink = ({ href, hideUnderline, children }) => (
  <CustomLink
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    hideUnderline={hideUnderline}>
    {children}
  </CustomLink>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  hideUnderline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ExternalLink.defaultProps = {
  hideUnderline: false,
};

export default ExternalLink;
