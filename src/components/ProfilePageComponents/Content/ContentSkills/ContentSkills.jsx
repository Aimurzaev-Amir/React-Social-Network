import React from "react";
import ContentBlockTitleSkills from "./ContentBlockTitleSkills";
import Skill1 from "./skill1";
import Skill2 from "./skill2";
import Skill3 from "./skill3";
import Skill4 from "./skill4";

let ContentSkills = () => {
  return (
    <div className="contentSkills">
      <ContentBlockTitleSkills />
      <div className="skillsGrid">
        <Skill1 />
        <Skill2 />
        <Skill3 />
        <Skill4 />
      </div>
    </div>
  );
};

export default ContentSkills;
