import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiTwotoneMail, AiFillInstagram, AiOutlinePhone } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';

import './Footer.css';

function Footer() {
  return (
    <div id='contact-us' className="footer-container">
      <div className="footer-inside">
        <div className="footer-socials">
          <h1>socials</h1>
          <div className="tags">
            <FaFacebook className="social-icon" />
            <AiFillInstagram className="social-icon" />
            <AiTwotoneMail className="social-icon" />
            <BsTelegram className="social-icon" />
          </div>
        </div>
        <div className="contact-us">
          <h1>contuct-us</h1>
          <div className="contact-us-container">
            <p>jsbfkswbfkw {<BiHomeAlt></BiHomeAlt>}</p>
            <p>jsbfkswbfkw {<AiOutlinePhone></AiOutlinePhone>}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
