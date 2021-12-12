import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Component container.
 */
const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 20px;
  width: 100%;

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

/**
 * Container for the image.
 */
const ContainerImage = styled.div`
  flex-basis: 50%;
`;

/**
 * Custom image component.
 */
const Image = styled.img`
  display: block;
  width: 100%;
`;

/**
 * Container for the description.
 */
const ContainerDescription = styled.div`
  flex-basis: 50%;
  padding: 5px 15px;
  padding-top: 0;
`;

/**
 * Container for the Project Name.
 */
const ContainerProjectName = styled.div`
  text-align: left;
  margin-bottom: 10px;

  font-family: 'Zen Maru Gothic Black';
  font-size: 1.2rem;
`;

/**
 * Displays a card containing a preview image, project name, and description.
 *
 * @param {object} props Component props.
 * @param {string} props.name Project Name.
 * @param {string} props.imageSrc URL to the image.
 * @param {React.Component} props.children Project Description.
 * @returns {React.Component} Card displaying project information.
 */
const ProjectCard = ({ name, imageSrc, children }) => (
  <Container>
    <ContainerImage>
      <Image src={imageSrc} alt={name} />
    </ContainerImage>
    <ContainerDescription>
      <ContainerProjectName>{name}</ContainerProjectName>
      <div>{children}</div>
    </ContainerDescription>
  </Container>
);

ProjectCard.propTypes = {};

export default ProjectCard;
