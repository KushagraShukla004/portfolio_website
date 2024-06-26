import React from "react";
// import { SiGmail } from 'react-icons/si';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/KushagraShukla004" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/kushagra-shukla101/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
