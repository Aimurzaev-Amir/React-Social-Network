import React from "react";
import ActivityIcon from "../../img/ContentBar/ActivityIcon.svg";

let Activity = () => {
  return (
    <a href="#s">
      <div className="contentBarItem">
        <img src={ActivityIcon} alt="" />
        <p>Activity</p>
      </div>
    </a>
  );
};

export default Activity;