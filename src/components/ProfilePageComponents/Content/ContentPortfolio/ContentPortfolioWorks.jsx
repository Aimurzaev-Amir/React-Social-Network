import React from "react";
import BeDentist from "../ContentImg/Portfolio/bedentist-card.png";
import KazTransGas from "../ContentImg/Portfolio/kaztransgas-card.png";
import Move from "../ContentImg/Portfolio/move-card.png";

let ContentPortfolioWorks = () => {
  return (
    <div className="contentPortfolioWorks">
      <img src={BeDentist} alt="be able user portfolio work" />
      <img src={KazTransGas} alt="be able user portfolio work" />
      <img src={Move} alt="be able user portfolio work" />
    </div>
  );
};

export default ContentPortfolioWorks;
