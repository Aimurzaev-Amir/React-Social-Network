import React from "react";
import GroupsIcon from "../SidebarImg/Groups.svg";

let Group = () => {
  return (
    <div className="navbarItem groups">
      <img src={GroupsIcon} alt="" />
      <p>Groups</p>
    </div>
  );
};

export default Group;
