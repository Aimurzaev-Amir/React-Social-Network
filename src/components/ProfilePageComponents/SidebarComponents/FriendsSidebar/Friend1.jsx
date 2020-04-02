import React from "react";
import Friend1Img from "../SidebarImg/Friends/Friend1.jpg";
import stl from "../Sidebar.module.css";

let Friend1 = () => {
  return (
    <div className={stl.Friend1}>
      <img src={Friend1Img} alt="Emma Taylor" />
      <p>Emma Taylor</p>
    </div>
  );
};
export default Friend1;
