import React from 'react';
import styled from 'styled-components';

import { Margin } from '_templates/Pages/Home';
import { Section, H2 } from '_templates/Sections/HomePage';
import desktopBreakpoint from '_util/responsiveDesign/desktopBreakpoint';
import GenericButton from '_components/Buttons/Button/Generic';
import mobileBreakpoint from '_util/responsiveDesign/mobileBreakpoint';
import tabletBreakpoint from '_util/responsiveDesign/tabletBreakpoint';

import Technologies from './components/Technologies';

/**
 * Custom heading.
 */
const CustomH2 = styled(H2)`
  text-align: center;
`;

/**
 * Container for the Grid.
 */
const ContainerGrid = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  margin-top: 25px;
`;

/**
 * Grid.
 */
const Grid = styled.div`
  display: grid;

  ${mobileBreakpoint`
    grid-template-columns: 80px 80px 80px;
    grid-gap: 15px;
  `}

  ${tabletBreakpoint`
    grid-template-columns: 100px 100px 100px 100px 100px 100px;
    grid-gap: 10px;
  `}

  ${desktopBreakpoint`
    grid-template-columns: 100px 100px 100px 100px 100px 100px;
    grid-gap: 10px;
  `}
`;

/**
 * About Me Section.
 *
 * @returns {React.Component} Section.
 */
const AboutMeSection = React.forwardRef(
  ({ scrollToWorkExperienceSection }, ref) => (
    <Section minHeight="100vh" ref={ref} id="about-me">
      <Margin>
        <CustomH2>About Me</CustomH2>

        <p>
          Hi! My name is Jon. I am a self-taught developer based in Toronto.
        </p>

        <p>
          My interest in web development began in 2016, and since then, I have
          had the privilege of working at two startups: a Software as a Service
          incubator startup, as well as a Payment Processor startup.
        </p>

        <p>
          Here are some of the technologies I have used throughout my career:
        </p>

        <ContainerGrid>
          <Grid>
            <Technologies />
          </Grid>
        </ContainerGrid>

        <div style={{ marginTop: '25px', textAlign: 'left' }}>
          When I am not developing, I tinker around with the homelab, servers,
          and home networking. My most recent goal was to decommission some old
          computer hardware, virtualize, and consolidate all my services such as
          pfSense and Nextcloud into a Proxmox Virtual Environment running on a
          single machine.
        </div>

        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <GenericButton type="button" onClick={scrollToWorkExperienceSection}>
            See Where I've Worked
          </GenericButton>
        </div>
      </Margin>
    </Section>
  )
);

export default AboutMeSection;
