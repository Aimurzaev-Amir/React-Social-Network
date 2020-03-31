import React from "react";
import BeDentist from "../../../../img/Content/Portfolio/bedentist-card.png";
import KazTransGas from "../../../../img/Content/Portfolio/kaztransgas-card.png";
import Move from "../../../../img/Content/Portfolio/move-card.png";

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
