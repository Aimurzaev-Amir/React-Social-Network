import React from "react";
import Friend1 from "./Friend1";
import stl from "../Sidebar.module.css";

let FriendsOnlineGrid = (props) => {
  let FriendsElements = props.FriendsSideBar.map((friend) => {
    return (
      <Friend1
        id={friend.id}
        FriendImg={friend.FriendImg}
        FriendName={friend.FriendName}
      />
    );
  });

  return <div className={stl.FriendsOnlineGrid}>{FriendsElements}</div>;
};

export default FriendsOnlineGrid;
