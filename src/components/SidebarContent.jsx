import React from "react";
import FriendsOnlineGrid from "./ProfilePageComponents/SidebarComponents/FriendsSidebar/FriendsOnlineGrid";
import Navbar from "./ProfilePageComponents/SidebarComponents/NavbarComponents/Navbar";
import PopularGroupsGrid from "./ProfilePageComponents/SidebarComponents/GroupsSidebar/PopularGroupsGrid";
import ButtonSideBar from "./ProfilePageComponents/SidebarComponents/Buttonsidebar";
import { NavLink } from "react-router-dom";

let SidebarContent = (props) => {
  return (
    <div className="sidebar-content wrapper">
      <Navbar />
      <div className="OnlineFriendsSidebar">
        <h4>Friends</h4>
        <FriendsOnlineGrid FriendsSideBar={props.sidebarPage.FriendsSideBar} />
        <NavLink to="./FriendsPageComponents/Friends.jsx">
          <ButtonSideBar buttonText="See all online friends" />
        </NavLink>
      </div>
      <div className="GroupsSidebar">
        <h4>Groups</h4>
        <PopularGroupsGrid GroupsSidebar={props.sidebarPage.GroupsSidebar} />
        <NavLink to="./FriendsPageComponents/Groups.jsx">
          <ButtonSideBar buttonText="See all groups" />
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarContent;
