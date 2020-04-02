import React from "react";
import Group1 from "./Group1";
import Group2 from "./Group2";
import Group3 from "./Group3";
import Group4 from "./Group4";
import stl from "../Sidebar.module.css";


let PopularGroupsGrid = () => {
    return (
        <div className={stl.PopularGroupsGrid}>
          <Group1 />
          <Group2 />
          <Group3 />
          <Group4 />
        </div>
    )
}

export default PopularGroupsGrid;