import React from 'react';
import './Navbar.css';
import logo from '../img/logo-1-removebg-preview.png';

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
