import React from "react";
import User from "../../assets/user.png";
import Arrow from "./HeaderImg/Vector.svg";
import stl from "./Header.module.css";
import { NavLink } from "react-router-dom";

let HeaderUser = (props) => {
  return (
    <div className={stl.headerUser}>
      {props.isAuth 
      ? (
        <div className={stl.headerUser}>
          <h4>{props.login}</h4>
          <div className={stl.UserPhoto}>
            <img
              src={props.profile ? props.profile : User}
              alt="User be able"
            />
          </div>
          <img className={stl.arrow} src={Arrow} alt="arrow down be able" />
        </div>
      ) : (
        <div className={stl.headerUser}>
          <NavLink to="/login">
            <h4>Login</h4>
          </NavLink>
        </div> 
      )}
    </div>
  );
};

export default HeaderUser;
