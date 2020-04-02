import React from "react";
import Friend2Img from "../SidebarImg/Friends/Friend2.jpg";
import stl from "../Sidebar.module.css";

let Friend2 = () => {
  return (
    <div className={stl.Friend2}>
      <img src={Friend2Img} alt="Dion Anderson" />
      <p>Dion Anderson</p>
    </div>
  );
};

export default Friend2;
