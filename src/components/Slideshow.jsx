/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Gallery from './Gallery';
import './Slideshow.css';

function Slideshow({ images }) {
  return (
    <div className="slide">
      <div className="slideshow">
        <h1>Gallary</h1>
        <Gallery galImage={images} />
      </div>
    </div>
  );
}

export default Slideshow;
