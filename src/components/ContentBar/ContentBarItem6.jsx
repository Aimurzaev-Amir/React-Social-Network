import React from "react";
import MoreIcon from "../../img/ContentBar/MoreIcon.svg";

let More = () => {
  return (
    <a href="#s">
      <div className="contentBarItem">
        <img src={MoreIcon} alt="" />
        <p>More</p>
      </div>
    </a>
  );
};

export default More;