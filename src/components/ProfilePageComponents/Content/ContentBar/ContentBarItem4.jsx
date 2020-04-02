import React from "react";
import FriendsIcon from "../ContentImg/ContentBar/FriendsIcon.svg";
import stl from "../Content.module.css";

let Friends = () => {
  return (
    <a href="#s">
      <div className={stl.contentBarItem}>
        <img src={FriendsIcon} alt="" />
        <p>Friends</p>
      </div>
    </a>
  );
};

export default Friends;
