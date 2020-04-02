import React from "react";
import GroupsIcon from "../ContentImg/ContentBar/GroupsIcon.svg";
import stl from "../Content.module.css";

let Groups = () => {
  return (
    <a href="#s">
      <div className={stl.contentBarItem}>
        <img src={GroupsIcon} alt="" />
        <p>Groups</p>
      </div>
    </a>
  );
};

export default Groups;
