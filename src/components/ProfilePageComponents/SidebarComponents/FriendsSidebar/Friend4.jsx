import React from "react";
import Friend4Img from "../SidebarImg/Friends/Friend4.jpg";
import stl from "../Sidebar.module.css";

let Friend4 = () => {
  return (
    <div className={stl.Friend4}>
      <img src={Friend4Img} alt="Imogen Miller" />
      <p>Imogen Miller</p>
    </div>
  );
};

export default Friend4;
