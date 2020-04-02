import React from "react";
import SkillsIcon from "../ContentImg/SkillsIcon.svg";
import stl from "../Content.module.css";

let ContentBlockTitleSkills = () => {
  return (
    <div className={stl.contentBlockTitle}>
      <img src={SkillsIcon} alt="be able user skills" />
      <h4>Skills</h4>
    </div>
  );
};

export default ContentBlockTitleSkills;