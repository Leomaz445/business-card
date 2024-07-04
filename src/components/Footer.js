import React from 'react';
import twitterIcon from '../assets/twitter-icon.png';
import facebookIcon from '../assets/facebook-icon.png';
import instagramIcon from '../assets/instgram-icon.png';
import githubIcon from '../assets/github-icon.png';
import '../styles/Footer.css'; 

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-button-container">
        <a className="twitter-icon" href="http://www.google.com">
          <img src={twitterIcon} className="button-twitter-icon" alt="Twitter" />
        </a>
        <a className="facebook-icon" href="http://www.google.com">
          <img src={facebookIcon} className="button-facebook-icon" alt="Facebook" />
        </a>
        <a className="instagram-icon" href="http://www.google.com">
          <img src={instagramIcon} className="button-instagram-icon" alt="Instagram" />
        </a>
        <a className="github-icon" href="https://github.com/Leomaz445">
          <img src={githubIcon} className="button-github-icon" alt="GitHub" />
        </a>
      </div>
    </div>
  );
}