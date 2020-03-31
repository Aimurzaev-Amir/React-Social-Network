import React from "react";
import FriendsIcon from "../../img/ContentBar/FriendsIcon.svg";

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
