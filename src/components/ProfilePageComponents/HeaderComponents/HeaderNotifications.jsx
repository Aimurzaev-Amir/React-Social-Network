import React from "react";
import Bell from "./HeaderImg/bell1.svg";
import stl from "./Header.module.css";

let HeaderNotifications = () => {
    return (
        <div className={stl.headerNotifications}>
            <img src={Bell} alt=""/>
        </div>
    );
}

export default HeaderNotifications;