import React from 'react';
import '../style/Footer.css';  // Import the corresponding CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="#" className="footer-link">Support Center</a></li>
          <li><a href="#" className="footer-link">Invoicing</a></li>
          <li><a href="#" className="footer-link">Contract</a></li>
          <li><a href="#" className="footer-link">Careers</a></li>
          <li><a href="#" className="footer-link">Blog</a></li>
          <li><a href="#" className="footer-link">FAQs</a></li>
        </ul>
        <p className="footer-text">© 2024 FASCO. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
