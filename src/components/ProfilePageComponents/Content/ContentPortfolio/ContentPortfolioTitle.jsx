import React from "react";
import PortfolioIcon from "../ContentImg/Portfolio/PortfolioIcon.svg";
import stl from "../Content.module.css";

let ContentPortfolioTitle = () => {
  return (
    <div className={stl.contentBlockTitle}>
      <img src={PortfolioIcon} alt="be able user portfolio" />
      <h4>Portfolio</h4>
    </div>
  );
};

export default ContentPortfolioTitle;