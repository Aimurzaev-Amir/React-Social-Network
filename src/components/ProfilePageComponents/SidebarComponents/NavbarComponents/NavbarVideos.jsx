import React from "react";
import VideoIcon from "../SidebarImg/videos.svg";
import stl from "../Sidebar.module.css";

let Videos = () => {
  return (
    <div className={`${stl.navbarItem} ${stl.video}`}>
      <img src={VideoIcon} alt="" />
      <p>Video</p>
    </div>
  );
};

export default Videos;
