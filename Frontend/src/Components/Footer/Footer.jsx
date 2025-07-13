import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <h3><b>FinTech</b></h3>

      <div className='info'>
        <p>All Rights Are Reserved</p>
        <p>Terms & Conditions</p>
      </div>

      <div id='socials'>
        <span>Email</span>
        <span>Instagram <i className="fa-brands fa-instagram"></i></span>
        <span>Facebook</span>
      </div>
    </div>
  );
};

export default Footer;

