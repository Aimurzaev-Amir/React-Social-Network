import React from "react";
import ContentPortfolioTitle from "./ContentPortfolioTitle";
import ContentPortfolioWorks from "./ContentPortfolioWorks";

let ContentPortfolio = () => {
  return (
    <div className="contentPortfolio">
      <ContentPortfolioTitle />
      <ContentPortfolioWorks />
    </div>
  );
};

export default ContentPortfolio;
