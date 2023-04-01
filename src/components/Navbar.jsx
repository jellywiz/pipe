import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';
import logo from '../img/logo-1-removebg-preview.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const mountedStyle = {
    animation: 'inAnimation 250ms ease-in',
  };
  const unmountedStyle = {
    animation: 'outAnimation 270ms ease-out',
    animationFillMode: 'forwards',
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsMounted(!isMounted);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  return (
    <div className="Navbar">
      <nav>
        <div className="hamburger-menu-button" onClick={toggleMenu}>
          <GiHamburgerMenu></GiHamburgerMenu>
        </div>
        {menuOpen && (
          <div
            className={menuOpen ? 'mobile-navbar open' : 'mobile-navbar closed'}
            style={isMounted ? mountedStyle : unmountedStyle}
            onAnimationEnd={() => {
              if (!isMounted) setMenuOpen(false);
            }}
          >
            <div className="popup-blur"></div>
            <AiOutlineClose
              className="close-btn"
              onClick={toggleMenu}
            ></AiOutlineClose>
            <ul className="nav-mob">
              <li className="nav-mob-item">
                <a onClick={toggleMenu} href="#home">
                  Home
                </a>
              </li>
              <li className="nav-mob-item">
                <a onClick={toggleMenu} href="#service">
                  Services
                </a>
              </li>
              <li className="nav-mob-item">
                <a onClick={toggleMenu} href="#about-us">
                  About Us
                </a>
              </li>
              <li className="nav-mob-item">
                <a onClick={toggleMenu} href="#gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-mob-item">
                <a onClick={toggleMenu} href="#contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className="navbar-items-wrapper">
          {!menuOpen && (
            <ul>
              <li className="nav-item">
                <a href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a href="#service">Services</a>
              </li>
              <li className="nav-item">
                <a href="#about-us">About Us</a>
              </li>
              <li className="nav-item">
                <a href="#gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          )}
        </div>
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
