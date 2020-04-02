import React from "react";
import User from "./HeaderImg/userSettings.png";
import Arrow from "./HeaderImg/Vector.svg";
import stl from "./Header.module.css";

let HeaderUser = () => {
    return (
        <div className={stl.headerUser}>
            <h4>Amir</h4>
            <img src={User} alt="User be able"/>
            <img src={Arrow} alt="arrow down be able"/>
        </div>
    );
}

export default HeaderUser;