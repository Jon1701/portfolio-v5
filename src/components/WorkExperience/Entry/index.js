import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Component container.
 */
const Container = styled.div``;

/**
 * Container for the top-row containing the Organization Logo,
 * Role, and Role Duration.
 */
const ContainerTopRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

/**
 * Container for the Logo.
 */
const ContainerLogo = styled.div``;

/**
 * Container for the Role and Role Duration.
 */
const ContainerSplitRows = styled.div`
  margin-left: 15px;
`;

/**
 * Custom image component.
 */
const Image = styled.img`
  width: 50px;
  height: auto;
`;

/**
 * Displays Work Experience information.
 *
 * @param {object} props Component props.
 * @param {string} props.logoSrc Logo URL.
 * @param {string} props.role Company role.
 * @param {string} props.company Company name.
 * @param {string} props.start Start date.
 * @param {string} props.end End date.
 * @param {React.Component} props.children Role description.
 * @returns {React.Component} Work Experience information.
 */
const WorkExperienceEntry = ({
  logoSrc,
  role,
  company,
  start,
  end,
  children,
}) => (
  <Container>
    <ContainerTopRow>
      <ContainerLogo>
        <Image src={logoSrc} alt={company} />
      </ContainerLogo>

      <ContainerSplitRows>
        <div>
          {role} at {company}
        </div>

        <div>
          {start} &mdash; {end}
        </div>
      </ContainerSplitRows>
    </ContainerTopRow>

    <div>{children}</div>
  </Container>
);

WorkExperienceEntry.propTypes = {};

export default WorkExperienceEntry;
