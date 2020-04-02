import React from "react";
import Group4Img from "../SidebarImg/Groups/Group4.jpg";
import stl from "../Sidebar.module.css";

let Group4 = () => {
  return (
    <div className={stl.Group4}>
      <img src={Group4Img} alt="" />
      <p>Emma Taylor</p>
    </div>
  );
};

export default Group4;
