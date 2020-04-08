import React from "react";
import stl from "./Messages.module.css";
import { NavLink } from "react-router-dom";

let DialogItem = (props) => {
  return (
    // <div className={stl.active}>
      <NavLink to={"/messages/MessagesUser" + props.id}>
        <div className={stl.dialogsItem}>
          <div className={stl.dialogsItemPhoto}>
            <img src={props.userPhoto} alt="" />
          </div>
          <div className={stl.UserName}>{props.userName}</div>
        </div>
      </NavLink>
    /* </div> */
  );
};

export default DialogItem;
