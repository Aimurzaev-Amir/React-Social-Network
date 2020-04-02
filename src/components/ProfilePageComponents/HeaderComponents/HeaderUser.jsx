import React from "react";
import User from "./HeaderImg/userSettings.png";
import Arrow from "./HeaderImg/Vector.svg";

let HeaderUser = () => {
    return (
        <div className="headerUser">
            <h4>Amir</h4>
            <img src={User} alt="User be able"/>
            <img src={Arrow} alt="arrow down be able"/>
        </div>
    );
}

export default HeaderUser;