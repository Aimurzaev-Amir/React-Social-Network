import React from "react";
import stl from "../Content.module.css";

let Skill3 = () => {
  return (
    <div className={stl.skill}>
      <div className={`${stl.skillMain} ${stl.skills3}`}>
        <p className={stl.skillName}>JavaScript</p>
      </div>
      <p className={stl.skillProcent}>60%</p>
    </div>
  );
};

export default Skill3;
