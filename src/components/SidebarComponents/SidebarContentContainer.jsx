import React from "react";
import SidebarContent from "../SidebarContent";

let SidebarContentContainer = (props) =>{
    let FriendsSideBar = (props.store.getState().sidebar.FriendsSideBar);
    let GroupsSidebar= (props.store.getState().sidebar.GroupsSidebar);

    return(
        <SidebarContent FriendsSideBar={FriendsSideBar} GroupsSidebar={GroupsSidebar} />
    )
    
    
}

export default SidebarContentContainer;