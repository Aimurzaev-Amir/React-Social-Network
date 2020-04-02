import React from "react";
import OverviewIcon from "../ContentImg/ContentBar/OverviewIcon.svg";
import stl from "../Content.module.css";

let Overview = () => {
  return (
    <a href="#s">
      <div className={stl.contentBarItem}>
        <img src={OverviewIcon} alt="" />
        <p>Overview</p>
      </div>
    </a>
  );
};

export default Overview;
