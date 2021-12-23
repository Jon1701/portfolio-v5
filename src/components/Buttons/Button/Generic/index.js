import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Custom button component.
 */
const CustomButton = styled.button`
  display: inline-block;
  padding: 10px 15px;

  background-color: #dc143c;
  border-radius: 5px;
  border: 0;
  color: inherit;

  text-decoration: none;

  cursor: pointer;

  &:hover {
    background-color: #a40f2d;
    transition: all 0.2s 0s ease-in-out;
  }
`;

/**
 * Generic button.
 *
 * @param {object} props Component props.
 * @param {React.Component} props.children Child nodes to be rendered.
 * @returns {React.Component} Generic button.
 */
const GenericButton = ({ children, ...rest }) => (
  <CustomButton {...rest}>{children}</CustomButton>
);

GenericButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default GenericButton;
