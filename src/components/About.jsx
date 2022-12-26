import React from 'react';
import logo from '../img/logo-1-removebg-preview.png';
import './About.css';

function About() {
  return (
    <div id="about-us" className="About-container">
      <h1>
        Mahan Plast Manufacturer of PVC PVC and UPVC Sewage, Water Supply and
        Fittings
      </h1>
      <div className="about">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="about-paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            fermentum tempus purus, nec molestie mauris convallis nec. Nam
            suscipit elementum felis, ac eleifend massa posuere volutpat. Proin
            iaculis fermentum lacus imperdiet condimentum. Aliquam cursus
            vehicula lacus eget finibus. Sed vehicula ante vitae orci pulvinar,
            ut suscipit nibh fringilla. Nullam sed nisi justo. Quisque suscipit
            ultricies massa a finibus. Fusce eget sagittis justo, sed sagittis
            odio. Suspendisse nibh orci, dignissim a dui eu, auctor semper
            justo. Sed varius dolor non elementum consequat. Vestibulum eget
            tellus varius, accumsan velit quis, tincidunt ipsum. Donec vitae
            ipsum ut dolor scelerisque dignissim et a enim. Maecenas dignissim
            dui in felis lobortis euismod. Sed tincidunt in leo at fermentum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
