import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

/**
 * Custom link component.
 */
const CustomLink = styled(Link)`
  display: inline-block;
  padding: 10px 15px;

  background-color: #dc143c;
  border-radius: 5px;
  color: inherit;

  text-decoration: none;

  &:hover {
    background-color: #a40f2d;
    transition: all 0.2s 0s ease-in-out;
  }
`;

/**
 * Internal Link button.
 *
 * @param {object} props Component props.
 * @param {string} props.to Link destination.
 * @param {React.Component} props.children Child nodes to be rendered.
 * @returns {React.Component} Link button.
 */
const InternalLinkButton = ({ to, children }) => (
  <CustomLink to={to}>{children}</CustomLink>
);

InternalLinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InternalLinkButton;
