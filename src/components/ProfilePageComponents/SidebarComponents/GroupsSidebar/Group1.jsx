import React from "react";
import stl from "../Sidebar.module.css";
import { NavLink } from "react-router-dom";

let Group1 = (props) => {
  return (
    <NavLink to={"./Group" + props.id}>
      <div className={stl.Group1}>
        <img src={props.Group1Img} alt="" />
        <p>{props.GroupName}</p>
      </div>
    </NavLink>
  );
};

export default Group1;
