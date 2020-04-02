import React from "react";
import stl from "../Content.module.css";

let Skill1 = () => {
  return (
    <div className={stl.skill}>
      <div className={`${stl.skillMain} ${stl.skills1}`}>
        <p className={stl.skillName}>HTML</p>
      </div>
      <p className={stl.skillProcent}>95%</p>
    </div>
  );
};

export default Skill1;
