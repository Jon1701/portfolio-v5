import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

/**
 * Custom Link component.
 */
const CustomLink = styled(Link)`
  font-family: inherit;
  color: inherit;

  cursor: pointer;

  text-decoration: ${props => (props.hideUnderline ? 'none' : 'underline')};
`;

/**
 * Internal Link.
 *
 * @param {object} props Component props.
 * @param {string} props.to Link destination.
 * @param {boolean} props.hideUnderline Hides the underline text decoration.
 * @param {React.Component} props.children Child nodes to render.
 * @returns {React.Component} Internal link.
 */
const InternalLink = ({ to, hideUnderline, children }) => (
  <CustomLink to={to} hideUnderline={hideUnderline}>
    {children}
  </CustomLink>
);

InternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  hideUnderline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

InternalLink.defaultProps = {
  hideUnderline: false,
};

export default InternalLink;
