import React from "react";
import MyPageIcon from "../SidebarImg/myPage.svg";
import stl from "../Sidebar.module.css";
import {NavLink} from "react-router-dom";

let MyPage = () => { 
  return (
    <div className={`${stl.navbarItem} ${stl.myPage}`}>
      <img src={MyPageIcon} alt="" />
      <NavLink to="/profile" activeClassName={stl.active}>Aimurzayev Amir</NavLink>
    </div>
  ); 
};

export default MyPage;
