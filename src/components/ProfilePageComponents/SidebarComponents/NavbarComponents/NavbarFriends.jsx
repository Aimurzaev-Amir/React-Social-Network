import React from "react";
import FriendsIcon from "../SidebarImg/Friends.svg";
import stl from "../Sidebar.module.css";
import { NavLink } from "react-router-dom";

let Friend = () => {
  return (
    <div className={`${stl.navbarItem} ${stl.friends}`}>
      <img src={FriendsIcon} alt="" />
      <NavLink to="/friends" activeClassName={stl.active}>Friends</NavLink>
    </div>
  );
};

export default Friend;
