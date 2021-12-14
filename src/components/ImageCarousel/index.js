import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PreviousNextButtons from './components/PreviousNextButtons';

/**
 * Component container.
 */
const Container = styled.div`
  background-color: #232023;
`;

/**
 * Container for the image title.
 */
const ContainerTitle = styled.div`
  background-color: #dc143c;
  text-align: center;
  padding: 15px 0;
`;

/**
 * Container for the image.
 */
const ContainerImage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

/**
 * Custom image.
 */
const Image = styled.img`
  display: block;
  max-width: 100%;
`;

/**
 * Displays a carousel of images.
 *
 * @param {object} props Component props.
 * @param {array} props.images Array of image objects.
 * @param {object} props.images[0] Image object.
 * @param {string} props.images[0].title Image title.
 * @param {string} props.images[0].src Path to the image.
 * @returns {React.Component} Image carousel.
 */
const ImageCarousel = ({ images }) => {
  // Tracks the index of the currently displayed image.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ref to the buttons
  const refToButtons = useRef(null);

  /**
   * Goes to the previous image.
   */
  const handleGoToPreviousImage = () => {
    // Scroll to the Previous/Next buttons.
    refToButtons.current.scrollIntoView();

    // Get new index.
    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

    // Set new index.
    setCurrentImageIndex(newIndex);
  };

  /**
   * Goes to the next image.
   */
  const handleGoToNextImage = () => {
    // Scroll to the Previous/Next buttons.
    refToButtons.current.scrollIntoView();

    // Get new index.
    const newIndex = (currentImageIndex + 1) % images.length;

    // Set new index.
    setCurrentImageIndex(newIndex);
  };

  return (
    <Container>
      {images.length > 1 ? (
        <React.Fragment>
          <PreviousNextButtons
            ref={refToButtons}
            previousImage={handleGoToPreviousImage}
            nextImage={handleGoToNextImage}
          />
          <ContainerTitle>
            <React.Fragment>
              ({currentImageIndex + 1} / {images.length})
            </React.Fragment>{' '}
            <React.Fragment>{images[currentImageIndex].title}</React.Fragment>
          </ContainerTitle>
        </React.Fragment>
      ) : null}

      <ContainerImage>
        <Image src={images[currentImageIndex].src} />
      </ContainerImage>

      {images.length > 1 ? (
        <PreviousNextButtons
          previousImage={handleGoToPreviousImage}
          nextImage={handleGoToNextImage}
        />
      ) : null}
    </Container>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageCarousel;