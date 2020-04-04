import React from "react";
import BlogIcon from "../SidebarImg/Blog.svg";
import stl from "../Sidebar.module.css";
import {NavLink} from "react-router-dom";

let NavbarMessages = () => {
  return (
    <div className={`${stl.navbarItem} ${stl.blog}`}>
      <img src={BlogIcon} alt="" />
      <NavLink to="/src/components/MessagesPageComponents/Messages.jsx" activeClassName={stl.active}>Messages</NavLink>
    </div>
  );
};

export default NavbarMessages;
