import React from "react";
import EventsIcon from "../SidebarImg/Events.svg";
import stl from "../Sidebar.module.css";

let Eventss = () => {
  return (
    <div className={`${stl.navbarItem} ${stl.events}`}>
      <img src={EventsIcon} alt="" />
      <p>Events</p>
    </div>
  );
};

export default Eventss;
