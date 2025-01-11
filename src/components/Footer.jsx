import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>E-CELL VIT CHENNAI</h3>
          <p>Empowering tomorrow's entrepreneurs today</p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/ecell_vitcc/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a 
              href="https://www.linkedin.com/company/e-cell-vitchennai/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              href="https://github.com/ecell-vitc" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        
        <div className="footer-right">
          <h3>E-Hackathon 2025</h3>
          <p>Join us in shaping the future of entrepreneurship</p>
          <div className="footer-links">
            <div className="links-column">
              <a onClick={() => scrollToSection('about')}>About</a>
              <a onClick={() => scrollToSection('schedule')}>Schedule</a>
            </div>
            <div className="links-column">
              <a onClick={() => scrollToSection('register')}>Register</a>
              <a onClick={() => scrollToSection('faqs')}>FAQs</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E-CELL VIT CHENNAI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;