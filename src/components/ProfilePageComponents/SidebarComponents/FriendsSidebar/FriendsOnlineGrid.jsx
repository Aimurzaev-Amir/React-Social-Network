import React from "react";
import Friend1 from "./Friend1";
import Friend2 from "./Friend2";
import Friend3 from "./Friend3";
import Friend4 from "./Friend4";
import stl from "../Sidebar.module.css";

let FriendsOnlineGrid = () => {
    return (
        <div className={stl.FriendsOnlineGrid}>
            <Friend1 />
            <Friend2 />
            <Friend3 />
            <Friend4 />
          </div>
    );
}

export default FriendsOnlineGrid;