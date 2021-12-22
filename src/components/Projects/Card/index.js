import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InternalLinkButton from '_components/Buttons/Button/InternalLink';
import mobileBreakpoint from '_util/responsiveDesign/mobileBreakpoint';
import tabletAndDesktopBreakpoint from '_util/responsiveDesign/tabletAndDesktopBreakpoint';

/**
 * Component container.
 */
const Container = styled.div`
  ${mobileBreakpoint`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 50px;
  `}

  ${tabletAndDesktopBreakpoint`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;

    margin-bottom: 20px;
  `}
  
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
  ${mobileBreakpoint`
    flex-basis: 100%;
  `}

  ${tabletAndDesktopBreakpoint`
    flex-basis: 50%;
  `}
`;

/**
 * Custom image component.
 */
const Image = styled.img`
  display: block;
  width: 100%;
`;

/**
 * Container for the Project Name.
 */
const ContainerProjectName = styled.div`
  ${mobileBreakpoint`
    text-align: center;
  `}

  ${tabletAndDesktopBreakpoint`
    text-align: left;
  `}

  margin-bottom: 10px;

  font-family: 'Zen Maru Gothic Black';
  font-size: 1.2rem;
`;

/**
 * Container for the description.
 */
const ContainerDescription = styled.div`
  ${mobileBreakpoint`
    flex-basis: 100%;
  `}

  ${tabletAndDesktopBreakpoint`
    flex-basis: 50%;
  `}

  padding: 5px 15px;
  padding-top: 0;
`;

/**
 * Container for the link button.
 */
const ContainerLinkButton = styled.div`
  text-align: center;
  margin-top: 25px;
`;

/**
 * Displays a card containing a preview image, project name, and description.
 *
 * @param {object} props Component props.
 * @param {string} props.name Project Name.
 * @param {string} props.imageSrc URL to the image.
 * @param {string} props.urlToProjectDetailsPage URL to the Project details page.
 * @param {React.Component} props.children Project Description.
 * @returns {React.Component} Card displaying project information.
 */
const ProjectCard = ({ name, imageSrc, urlToProjectDetailsPage, children }) => (
  <Container>
    <ContainerImage>
      <Image src={imageSrc} alt={name} draggable="false" />
    </ContainerImage>
    <ContainerDescription>
      <ContainerProjectName>{name}</ContainerProjectName>
      <div>{children}</div>

      {urlToProjectDetailsPage ? (
        <ContainerLinkButton>
          <InternalLinkButton to={urlToProjectDetailsPage}>
            Learn More!
          </InternalLinkButton>
        </ContainerLinkButton>
      ) : null}
    </ContainerDescription>
  </Container>
);

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  urlToProjectDetailsPage: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ProjectCard.defaultProps = {
  urlToProjectDetailsPage: null,
};

export default ProjectCard;
