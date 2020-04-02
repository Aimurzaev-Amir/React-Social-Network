import React from "react";
import ContentPortfolioTitle from "./ContentPortfolioTitle";
import ContentPortfolioWorks from "./ContentPortfolioWorks";
import stl from "../Content.module.css";

let ContentPortfolio = () => {
  return (
    <div className={stl.contentPortfolio}>
      <ContentPortfolioTitle />
      <ContentPortfolioWorks />
    </div>
  );
};

export default ContentPortfolio;
