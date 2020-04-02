import React from "react";
import FriendsIcon from "../ContentImg/ContentBar/FriendsIcon.svg";

let Friends = () => {
  return (
    <a href="#s">
      <div className="contentBarItem">
        <img src={FriendsIcon} alt="" />
        <p>Friends</p>
      </div>
    </a>
  );
};

export default Friends;
