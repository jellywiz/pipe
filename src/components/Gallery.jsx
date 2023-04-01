import './Gallery.css';

function Gallery({ img }) {
  return (
    <div className="gallery-container">
      <div className="gallery">
        {img.map((item) => (
          <div className="gallery-item" key={item.id}>
            <img src={item.src} alt={item.alt} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
