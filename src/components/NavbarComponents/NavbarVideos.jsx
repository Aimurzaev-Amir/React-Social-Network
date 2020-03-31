import React from "react";
import VideoIcon from "../../img/Navbar/videos.svg";

let Videos = () => {
  return (
    <div className="navbarItem video">
      <img src={VideoIcon} alt="" />
      <p>Video</p>
    </div>
  );
};

export default Videos;
