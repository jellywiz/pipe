import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

import './Footer.css';

function Footer() {
  return (
    <div id="contact-us" className="footer-container">
      <div className="footer-inside">
        <div className="footer-socials">
          <h1>الاجتماعية</h1>
          <div className="tags">
            <a href="https://www.facebook.com/profile.php?id=100091528807705&mibextid=LQQJ4d">
              <FaFacebook className="social-icon" />
            </a>
            <a href="mailto:alamanplastcompany@gmail.com">
              <AiTwotoneMail className="social-icon" />
            </a>
            <a href="https://t.me/alamanplast">
              <BsTelegram className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
