import React from "react";
import VideoIcon from "../SidebarImg/videos.svg";

let Videos = () => {
  return (
    <div className="navbarItem video">
      <img src={VideoIcon} alt="" />
      <p>Video</p>
    </div>
  );
};

export default Videos;
