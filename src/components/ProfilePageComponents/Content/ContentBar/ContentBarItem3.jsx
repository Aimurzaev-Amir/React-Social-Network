import React from "react";
import AboutIcon from "../ContentImg/ContentBar/AboutIcon.svg";
import stl from "../Content.module.css";

let About = () => {
  return (
    <a href="#s">
      <div className={stl.contentBarItem}>
        <img src={AboutIcon} alt="" />
        <p>About</p>
      </div>
    </a>
  );
};

export default About;
