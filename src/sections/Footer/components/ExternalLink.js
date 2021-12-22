import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BaseExternalLink from '_components/Links/ExternalLink';

/**
 * Container for the link content.
 */
const ContainerContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

/**
 * Container for the SVG.
 */
const ContainerSVG = styled.div`
  svg {
    max-width: 75px;
    height: auto;
  }
`;

/**
 * Container for the link name.
 */
const ContainerName = styled.div``;

/**
 * Displays a hyperlink to an external resource, displays and icon and label.
 *
 * @param {object} props Component props.
 * @param {React.Component} props.JSXIcon SVG Icon component.
 * @param {string} props.href Hyperlink destination.
 * @param {string} props.name Link label.
 * @returns {React.Component} Hyperlink with icon and label.
 */
const ExternalLink = ({ JSXIcon, href, name }) => (
  <BaseExternalLink href={href} hideUnderline>
    <ContainerContent>
      <ContainerSVG>{JSXIcon}</ContainerSVG>
      <ContainerName>{name}</ContainerName>
    </ContainerContent>
  </BaseExternalLink>
);

ExternalLink.propTypes = {
  JSXIcon: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ExternalLink;
