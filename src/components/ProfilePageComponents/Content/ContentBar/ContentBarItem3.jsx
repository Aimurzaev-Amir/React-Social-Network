import React from "react";
import AboutIcon from "../ContentImg/ContentBar/AboutIcon.svg";

let About = () => {
  return (
    <a href="#s">
      <div className="contentBarItem">
        <img src={AboutIcon} alt="" />
        <p>About</p>
      </div>
    </a>
  );
};

export default About;
