import React from "react";
import SidebarContent from "../SidebarContent";
import StoreContext from "../../StoreContext";

let SidebarContentContainer = () =>{

    return(
        <StoreContext.Consumer> 
            {(store) => {
                let FriendsSideBar = (store.getState().sidebar.FriendsSideBar);
                let GroupsSidebar= (store.getState().sidebar.GroupsSidebar);
            return (
                <SidebarContent FriendsSideBar={FriendsSideBar} GroupsSidebar={GroupsSidebar} />
            )}}
        </StoreContext.Consumer>
    )
    
    
}

export default SidebarContentContainer;