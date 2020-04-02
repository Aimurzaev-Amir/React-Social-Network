import React from "react";
import stl from "../Content.module.css";

let Skill4 = () => {
  return (
    <div className={stl.skill}>
      <div className={`${stl.skillMain} ${stl.skills4}`}>
        <p className={stl.skillName}>PHP</p>
      </div>
      <p className={stl.skillProcent}>20%</p>
    </div>
  );
};

export default Skill4;
