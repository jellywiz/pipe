import React from 'react';
import './Header.css';
import logo from '../img/logo-1-removebg-preview.png';
import { FaFacebook } from 'react-icons/fa';
import { AiTwotoneMail, AiFillInstagram } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

function Header() {
  return (
    <div className="custom">
      <div className="topheader">
        <div className="inside">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="social">
            <FaFacebook />
            <AiFillInstagram />
            <AiTwotoneMail />
            <BsTelegram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
