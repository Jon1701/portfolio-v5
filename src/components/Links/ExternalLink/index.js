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
`;

/**
 * External Link.
 *
 * @param {object} props Component props.
 * @param {string} props.href Link destination.
 * @param {React.Component} props.children Child nodes to render.
 * @returns {React.Component} External link.
 */
const ExternalLink = ({ href, children }) => (
  <CustomLink href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </CustomLink>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExternalLink;
