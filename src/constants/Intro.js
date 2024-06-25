import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Intro = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Developer 💻 📱", "Designer 🎨", "Tech Enthusiast 🤖🧑‍💻", "Guitarist 🎸"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    // Destroy Typed instance during cleanup to stop animation
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <p style={{ fontSize: "25px", color: "white" }}>
      I am a <span style={{ fontSize: "25px" }} ref={typedElement}></span>
    </p>
  );
};

export default Intro;
