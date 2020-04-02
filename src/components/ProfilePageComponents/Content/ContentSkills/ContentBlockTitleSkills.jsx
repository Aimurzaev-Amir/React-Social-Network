import React from "react";
import SkillsIcon from "../ContentImg/SkillsIcon.svg";

let ContentBlockTitleSkills = () => {
  return (
    <div className="contentBlockTitle">
      <img src={SkillsIcon} alt="be able user skills" />
      <h4>Skills</h4>
    </div>
  );
};

export default ContentBlockTitleSkills;