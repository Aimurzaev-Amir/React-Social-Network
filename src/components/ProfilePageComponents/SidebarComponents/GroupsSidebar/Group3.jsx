import React from "react";
import Group3Img from "../SidebarImg/Groups/Group3.jpg";
import stl from "../Sidebar.module.css";

let Group3 = () => {
  return (
    <div className={stl.Group3}>
      <img src={Group3Img} alt="" />
      <p>Emma Taylor</p>
    </div>
  );
};

export default Group3;
