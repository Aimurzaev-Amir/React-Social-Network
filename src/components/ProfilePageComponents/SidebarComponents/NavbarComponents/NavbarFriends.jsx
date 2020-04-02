import React from "react";
import FriendsIcon from "../SidebarImg/Friends.svg";

let Friend = () => {
  return (
    <div className="navbarItem friends">
      <img src={FriendsIcon} alt="" />
      <p>Friends</p>
    </div>
  );
};

export default Friend;
