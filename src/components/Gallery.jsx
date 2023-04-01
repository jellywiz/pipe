import './Gallery.css';

function Gallery({ galImage }) {
  return (
    <div className="gallery-container">
      <div className="gallery">
        {/* {galImage.map((image) => (
          <div key={image.key} className="gallery-item">
            <img src={require(image.src)} alt={image.alt} />
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        ))} */}
        <div className="gallery-item">
          <img src={require('../img/photo_1.jpg')} alt="1" />
          <h3>1</h3>
          <p>1</p>
        </div>
        <div className="gallery-item">
          <img src={require('../img/photo_2.jpg')} alt="1" />
          <h3>1</h3>
          <p>1</p>
        </div>
        <div className="gallery-item">
          <img src={require('../img/photo_3.jpg')} alt="1" />
          <h3>1</h3>
          <p>1</p>
        </div>
        <div className="gallery-item">
          <img src={require('../img/photo_4.jpg')} alt="1" />
          <h3>1</h3>
          <p>1</p>
        </div>
        {/* <div className="gallery-item">
          <img src={require('../img/photo_5.jpg')} alt="1" />
          <h3>1</h3>
          <p>1</p>
        </div> */}
        <div className="gallery-item">
          <img src={require('../img/photo_6.jpg')} alt="1" />
          <h3>1</h3>
          <p>1</p>
        </div>
        <div className="gallery-item">
          <img src={require('../img/photo_7.jpg')} alt="1" />
          <h3>1</h3>
          <p>1</p>
        </div>
        <div className="gallery-item">
          <img src={require('../img/photo_8.jpg')} alt="1" />
          <h3>1</h3>
          <p>1</p>
        </div>
        <div className="gallery-item">
          <img src={require('../img/photo_9.jpg')} alt="1" />
          <h3>1</h3>
          <p>1</p>
        </div>
        <div className="gallery-item">
          <img src={require('../img/photo_10.jpg')} alt="1" />
          <h3>1</h3>
          <p>1</p>
        </div>
        {/* <div className="gallery-item">
          <img src={require('../img/photo_11.jpg')} alt="1" />
          <h3>1</h3>
          <p>1</p>
        </div> */}
      </div>
    </div>
  );
}

export default Gallery;
