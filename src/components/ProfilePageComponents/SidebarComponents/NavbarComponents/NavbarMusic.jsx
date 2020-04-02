import React from "react";
import MusicIcon from "../SidebarImg/music.svg";
import stl from "../Sidebar.module.css";

let Songs = () => {
  return (
    <div className={`${stl.navbarItem} ${stl.music}`}>
      <img src={MusicIcon} alt="" />
      <p>Music</p>
    </div>
  );
};

export default Songs;
