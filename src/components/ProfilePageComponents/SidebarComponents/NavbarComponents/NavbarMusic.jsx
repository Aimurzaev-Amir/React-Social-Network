import React from "react";
import MusicIcon from "../SidebarImg/music.svg";

let Songs = () => {
  return (
    <div className="navbarItem music">
      <img src={MusicIcon} alt="" />
      <p>Music</p>
    </div>
  );
};

export default Songs;
