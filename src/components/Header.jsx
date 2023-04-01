import React from 'react';
import './Header.css';
import { FaFacebook } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

function Header() {
  return (
    <div className="custom">
      <div className="topheader">
        <div className="inside">
          <div className="logo">
            <p>الأمان بلاست</p>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100091528807705&mibextid=LQQJ4d">
              <FaFacebook className="header-icon" />
            </a>
            <a href="mailto:alamanplastcompany@gmail.com">
              <AiTwotoneMail className="header-icon" />
            </a>
            <a href="https://t.me/alamanplast">
              <BsTelegram className="header-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
