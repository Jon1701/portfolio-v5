import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Component container.
 */
const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  margin-top: ${props => props.marginTop || 'auto'};
  margin-bottom: ${props => props.marginBottom || 'auto'};
`;

/**
 * Custom button.
 */
const Button = styled.button`
  border-radius: 0;
  border: none;
  padding: 10px 15px;

  background-color: #dc143c;
  color: inherit;

  &:hover {
    background-color: #a40f2d;
    transition: all 0.2s 0s ease-in-out;
    cursor: pointer;
  }
`;

/**
 * Displays the Previous and Next buttons.
 *
 * @param {object} props Component props.
 * @param {string} props.marginTop CSS Top Margin value.
 * @param {string} props.marginBottom CSS Bottom Margin value.
 * @param {function} props.previousImage Displays the previous image.
 * @param {function} props.nextImage Displays the next image.
 * @param {object} ref Component ref.
 * @returns {React.Component} Buttons.
 */
const PreviousNextButtons = React.forwardRef(
  ({ marginTop, marginBottom, previousImage, nextImage }, ref) => (
    <Container ref={ref} marginTop={marginTop} marginBottom={marginBottom}>
      <Button type="button" onClick={previousImage}>
        &#10229; Previous
      </Button>
      <Button type="button" onClick={nextImage}>
        Next &#10230;
      </Button>
    </Container>
  )
);

PreviousNextButtons.propTypes = {
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  previousImage: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired,
};

export default PreviousNextButtons;
