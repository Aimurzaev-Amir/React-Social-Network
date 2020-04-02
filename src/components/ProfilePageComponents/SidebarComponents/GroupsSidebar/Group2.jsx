import React from "react";
import Group2Img from "../SidebarImg/Groups/Group2.jpg";
import stl from "../Sidebar.module.css";

let Group2 = () => {
    return (
        <div className={stl.Group2}>
            <img src={Group2Img} alt="" />
            <p>Emma Taylor</p>
          </div>
    )
}

export default Group2;