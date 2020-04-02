import React from "react";
import MoreIcon from "../ContentImg/ContentBar/MoreIcon.svg";
import stl from "../Content.module.css";

let More = () => {
  return (
    <a href="#s">
      <div className={stl.contentBarItem}>
        <img src={MoreIcon} alt="" />
        <p>More</p>
      </div>
    </a>
  );
};

export default More;