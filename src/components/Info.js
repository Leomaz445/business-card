import React from 'react';
import emailIcon from '../assets/email-icon.png';
import linkdinIcon from '../assets/linkdin-icon.png';
import profilePic from '../assets/profile-pic.jfif';
import '../styles/Info.css'; 

function Info() {
  return (
    <div className="profile">
      <div className="image-container">
        <img src={profilePic} alt="Profile" className="cropped-image" />
      </div>
      <div className="info">
        <div className="info-container">
          <p className="profile-name">Leonid Mazarsky</p>
          <p className="job-title">Software Developer</p>
          <a className="web-profile" href="https://github.com/Leomaz445">My GitHub</a>
        </div>
        <div className="buttons-container">
          <a className="email-button" href="mailto:leomaz445@gmail.com">
            <img src={emailIcon} alt="Email Icon" className="button-image-email" />
            <span className="email-text">Email</span>
          </a>
          <a className="linkdin-button" href="https://www.linkedin.com/in/leonid-mazarsky-846a09199/">
            <img src={linkdinIcon} alt="LinkedIn Icon" className="button-image-linkdin" />
            <span className="linkdin-text">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;