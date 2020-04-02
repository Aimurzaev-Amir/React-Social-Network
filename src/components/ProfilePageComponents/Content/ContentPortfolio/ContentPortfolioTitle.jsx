import React from "react";
import PortfolioIcon from "../ContentImg/Portfolio/PortfolioIcon.svg";

let ContentPortfolioTitle = () => {
  return (
    <div className="contentBlockTitle">
      <img src={PortfolioIcon} alt="be able user portfolio" />
      <h4>Portfolio</h4>
    </div>
  );
};

export default ContentPortfolioTitle;