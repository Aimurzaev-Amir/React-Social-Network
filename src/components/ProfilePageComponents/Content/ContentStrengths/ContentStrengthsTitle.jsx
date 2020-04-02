import React from "react";
import StrengthsIcon from "../ContentImg/StrengthsIcon.svg";
import stl from "../Content.module.css";

let ContentStrengthsTitle = () => {
  return (
    <div className={stl.contentBlockTitle}>
      <img src={StrengthsIcon} alt="be able user strengths" />
      <h4>Strengths</h4>
    </div>
  );
};

export default ContentStrengthsTitle;