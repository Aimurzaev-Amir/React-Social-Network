import React from "react";
import ActivityIcon from "../ContentImg/ContentBar/ActivityIcon.svg";
import stl from "../Content.module.css";

let Activity = () => {
  return (
    <a href="#s">
      <div className={stl.contentBarItem}>
        <img src={ActivityIcon} alt="" />
        <p>Activity</p>
      </div>
    </a>
  );
};

export default Activity;