import React from "react";
import StrengthsIcon from "../ContentImg/StrengthsIcon.svg";

let ContentStrengthsTitle = () => {
  return (
    <div className="contentBlockTitle">
      <img src={StrengthsIcon} alt="be able user strengths" />
      <h4>Strengths</h4>
    </div>
  );
};

export default ContentStrengthsTitle;