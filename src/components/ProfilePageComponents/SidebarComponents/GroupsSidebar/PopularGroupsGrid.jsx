import React from "react";
import Group1 from "./Group1";
import stl from "../Sidebar.module.css";

let PopularGroupsGrid = (props) => {
  let GroupsElements = props.GroupsSidebar.map((group) => {
    return (
      <Group1
        key={group.id}
        id={group.id}
        Group1Img={group.Group1Img}
        GroupName={group.GroupName}
      />
    );
  });

  return <div className={stl.PopularGroupsGrid}>{GroupsElements}</div>;
};

export default PopularGroupsGrid;
