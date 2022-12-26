/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './Slideshow.css';

function Slideshow({ images, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length, interval]);

  useEffect(() => {
    setSelectedIndex(currentIndex);
  }, [currentIndex]);

  const selectImage = (index) => {
    setSelectedIndex(index);
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow">
      <h1>Gallary</h1>
      <img src={images[currentIndex].src} alt="slideshow image" />
      <div className="slideshow-circles">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`slideshow-circle ${
              index === selectedIndex ? 'selected' : ''
            }`}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
