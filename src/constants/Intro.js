import React from "react";
import Typical from "react-typical";

const Intro = () => {
  return (
    <>
      <p style={{ fontSize: "25px", color: "white" }}>
        I am a{" "}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Developer 💻 📱",
            1000,
            "Designer 🎨",
            1000,
            "Tech Enthusiast 🤖🧑‍💻",
            1000,
            "Guitarist 🎸",
            1000,
          ]}
        />
      </p>
    </>
  );
};

export default Intro;
