import React from "react";
import GroupsIcon from "../SidebarImg/Groups.svg";
import stl from "../Sidebar.module.css";

let Group = () => {
  return (
    <div className={`${stl.navbarItem} ${stl.groups}`}>
      <img src={GroupsIcon} alt="" />
      <p>Groups</p>
    </div>
  );
};

export default Group;
