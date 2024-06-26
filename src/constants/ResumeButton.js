import React from "react";
import { images } from "../constants";
import "./Resume.scss";
const ResumeButton = () => {
  return (
    <a href={images.resume} alt="Download Resume">
      <button>
        <span style={{ fontSize: "25px" }}>Resume</span>
      </button>
    </a>
  );
};

export default ResumeButton;
