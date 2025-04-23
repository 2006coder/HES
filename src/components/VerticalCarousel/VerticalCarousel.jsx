import React from 'react';
import './VerticalCarouselStyles.css';

const slides = [
  "Info 1",
  "Info 2",
  "Info 3",
  "Info 4"
];

const VerticalCarousel = () => {
  // Duplicate the slides to allow seamless looping.
  const extendedSlides = [...slides, ...slides];
  
  return (
    <div className="vertical-carousel">
      <div className="carousel-track">
        {extendedSlides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;