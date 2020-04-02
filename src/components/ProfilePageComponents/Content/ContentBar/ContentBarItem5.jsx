import React from "react";
import GroupsIcon from "../ContentImg/ContentBar/GroupsIcon.svg";

let Groups = () => {
  return (
    <a href="#s">
      <div className="contentBarItem">
        <img src={GroupsIcon} alt="" />
        <p>Groups</p>
      </div>
    </a>
  );
};

export default Groups;
