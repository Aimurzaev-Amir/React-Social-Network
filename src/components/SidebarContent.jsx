import React from "react";


import FriendsOnlineGrid from "./FriendsSidebar.jsx/FriendsOnlineGrid";
import Navbar from "./NavbarComponents/Navbar";
import PopularGroupsGrid from "./GroupsSidebar.jsx/PopularGroupsGrid";

let SidebarContent = () => {
  return (
    <div className="sidebar-content wrapper">
      <Navbar />
      <div className="OnlineFriendsSidebar">
        <h4>Friends</h4>
        <FriendsOnlineGrid />
        <button className="PageButton">See all online friends</button>
      </div>

      <div className="GroupsSidebar">
        <h4>Groups</h4>
        <PopularGroupsGrid />
        <button className="PageButton">See all groups</button>
      </div>
    </div>
  );
};

export default SidebarContent;
