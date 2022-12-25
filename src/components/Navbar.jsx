import React from 'react';
import './Navbar.css';
import logo from '../img/logo-1-removebg-preview.png';

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#service">
            <li>Services</li>
          </a>
          <a href="#about-us">
            <li>About Us</li>
          </a>
        </ul>
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
