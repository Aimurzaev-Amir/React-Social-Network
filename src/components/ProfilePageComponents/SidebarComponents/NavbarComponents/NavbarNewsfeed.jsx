import React from "react";
import NewsfeedIcon from "../SidebarImg/Newsfeed.svg";
import stl from "../Sidebar.module.css";

let Newsfeeds = () => {
  return (
    <div className={`${stl.navbarItem} ${stl.newsfeed}`}>
      <img src={NewsfeedIcon} alt="" />
      <p>Newsfeed</p>
    </div>
  );
};

export default Newsfeeds;
