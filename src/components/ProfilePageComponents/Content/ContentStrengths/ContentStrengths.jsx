import React from "react";
import ContentStrengthsTitle from "./ContentStrengthsTitle";
import ContentStrengthsText from "./ContentStrengthsText";
import stl from "../Content.module.css";

let ContentStrengths = () => {
  return (
    <div className={stl.contentStrengths}>
      <ContentStrengthsTitle />
      <ContentStrengthsText />
    </div>
  );
};

export default ContentStrengths;
