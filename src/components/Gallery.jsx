import React from 'react';
import './Gallery.css';

function Gallery({ galImage }) {
  return (
    <div id="gallery">
      <div className="gallery">
        {galImage.map((image) => (
          <div key={image.key} className="gallery-item">
            <img src={image.src} alt={image.alt} />
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
