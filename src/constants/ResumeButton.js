import React from "react";
import { images } from "../constants";
import "./Resume.scss";

const ResumeButton = () => {
  const handleResumeDownload = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "resume_download",
      category: "Resume",
      action: "Download",
      label: "Resume PDF",
    });
  };

  return (
    <a
      id="resume-download"
      href={images.resume}
      alt="Download Resume"
      onClick={handleResumeDownload}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>
        <span style={{ fontSize: "25px" }}>Resume</span>
      </button>
    </a>
  );
};

export default ResumeButton;
