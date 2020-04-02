import React from "react";
import MyPageIcon from "../SidebarImg/myPage.svg";
import stl from "../Sidebar.module.css";

let MyPage = () => {
  return (
    <div className={`${stl.navbarItem} ${stl.myPage}`}>
      <img src={MyPageIcon} alt="" />
      <p>Aimurzayev Amir</p>
    </div>
  );
};

export default MyPage;
