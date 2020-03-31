import React from "react";
import OverviewIcon from "../../img/ContentBar/OverviewIcon.svg";

let Overview = () => {
  return (
    <a href="#s">
      <div className="contentBarItem">
        <img src={OverviewIcon} alt="" />
        <p>Overview</p>
      </div>
    </a>
  );
};

export default Overview;
