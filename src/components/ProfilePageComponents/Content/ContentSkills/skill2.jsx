import React from "react";
import stl from "../Content.module.css";

let Skill2 = () => {
  return (
    <div className={stl.skill}>
      <div className={`${stl.skillMain} ${stl.skills2}`}>
        <p className={stl.skillName}>CSS</p>
      </div>
      <p className={stl.skillProcent}>90%</p>
    </div>
  );
};

export default Skill2;
