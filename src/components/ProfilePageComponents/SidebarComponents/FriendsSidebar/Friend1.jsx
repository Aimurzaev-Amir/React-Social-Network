import React from "react";
import stl from "../Sidebar.module.css";
import { NavLink } from "react-router-dom";

let Friend1 = (props) => {
  return (
    <NavLink to={"./FriendsPageComponents/Friend" + props.id}>
      <div className={stl.Friend1}>
        <img src={props.FriendImg} alt="Emma Taylor" />
        <p>{props.FriendName}</p>
      </div>
    </NavLink>
  );
};
export default Friend1;
