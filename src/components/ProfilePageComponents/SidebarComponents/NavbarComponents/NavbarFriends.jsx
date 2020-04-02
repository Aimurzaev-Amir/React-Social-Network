import React from "react";
import FriendsIcon from "../SidebarImg/Friends.svg";
import stl from "../Sidebar.module.css";

let Friend = () => {
  return (
    <div className={`${stl.navbarItem} ${stl.friends}`}>
      <img src={FriendsIcon} alt="" />
      <p>Friends</p>
    </div>
  );
};

export default Friend;
