import React from "react";
import Group1Img from "../SidebarImg/Groups/Group1.jpg";
import stl from "../Sidebar.module.css";

let Group1 = () => {
  return (
    <div className={stl.Group1}>
      <img src={Group1Img} alt="" />
      <p>Emma Taylor</p>
    </div>
  );
};

export default Group1;
