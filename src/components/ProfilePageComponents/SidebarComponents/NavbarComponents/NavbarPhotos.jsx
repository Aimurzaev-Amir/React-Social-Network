import React from "react";
import PhotosIcon from "../SidebarImg/images.svg";
import stl from "../Sidebar.module.css";

let Photo = () => {
  return (
    <div className={`${stl.navbarItem} ${stl.photos}`}>
          <img src={PhotosIcon} alt="" />
          <p>Photos</p>
        </div>
  );
};

export default Photo;
