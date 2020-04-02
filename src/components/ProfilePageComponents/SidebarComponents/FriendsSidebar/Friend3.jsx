import React from "react";
import Friend3Img from "../SidebarImg/Friends/Friend3.jpg";
import stl from "../Sidebar.module.css";

let Friend3 = () => {
  return (
    <div className={stl.Friend3}>
      <img src={Friend3Img} alt="Charlie Grant" />
      <p>Charlie Grant</p>
    </div>
  );
};

export default Friend3;
