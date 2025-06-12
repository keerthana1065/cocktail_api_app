import React from 'react';
import './FooterSection.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3>Cocktail Gallery 🍹</h3>
        <p>Sip, Relax, Repeat – Discover your perfect cocktail today!</p>

        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>

        <p className="footer-note">© 2025 Cocktail Gallery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;