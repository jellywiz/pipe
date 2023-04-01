/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Gallery from './Gallery';
import './Slideshow.css';

function Slideshow() {
  const img = [
    {
      id: 1,
      src: require('../img/photo_1.jpg'),
      alt: '1',
      title: 'Elbow 45 / كوخ زاوية ٤٥',
    },
    {
      id: 2,
      src: require('../img/photo_2.jpg'),
      alt: '2',
      title: 'Reducer / نقاص',
    },
    {
      id: 3,
      src: require('../img/photo_3.jpg'),
      alt: '3',
      title: 'Wyee Reducer 45 / واي نقاص ٤٥',
    },
    {
      id: 4,
      src: require('../img/photo_4.jpg'),
      alt: '4',
    },
    {
      id: 5,
      src: require('../img/photo_5.jpg'),
      alt: '5',
      title: 'Wyee 45 / واي ٤٥',
    },
    {
      id: 6,
      src: require('../img/photo_6.jpg'),
      alt: '6',
      title: 'Tee 90 / قصام ۹۰',
    },
    {
      id: 7,
      src: require('../img/photo_7.jpg'),
      alt: '7',
      title: 'P-Trap / كوخ ريحة',
    },
    {
      id: 8,
      src: require('../img/photo_8.jpg'),
      alt: '8',
      title: 'P-Trap / كوخ ريحة',
    },
    {
      id: 9,
      src: require('../img/photo_9.jpg'),
      alt: '9',
      title: 'P-Trap / كوخ ريحة',
    },
    {
      id: 10,
      src: require('../img/photo_10.jpg'),
      alt: '10',
      title: 'P-Trap / كوخ ريحة',
    },
    {
      id: 11,
      src: require('../img/photo_11.jpg'),
      alt: '11',
      title: 'P-Trap / كوخ ريحة',
    },
  ];
  return (
    <div className="slide">
      <div className="slideshow">
        <h1>غالاري</h1>
        <Gallery img ={img}/>
      </div>
    </div>
  );
}

export default Slideshow;
