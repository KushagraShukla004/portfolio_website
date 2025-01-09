import React from "react";
import { images } from "../constants";
import "./Resume.scss";

const ResumeButton = () => {
  const handleResumeDownload = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "resume_download",
      event_category: "Resume",
      event_action: "Download",
      event_label: "Resume PDF",
    });
  };

  return (
    <a
      id="resume-download"
      href={images.resumeLink}
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
