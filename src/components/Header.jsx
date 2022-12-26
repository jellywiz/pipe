import React from 'react';
import './Header.css';
import { FaFacebook } from 'react-icons/fa';
import { AiTwotoneMail, AiFillInstagram } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

function Header() {
  return (
    <div className="custom">
      <div className="topheader">
        <div className="inside">
          <div className="logo">
            <p>Company Name</p>
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
