import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ProfileInfoContainer from "./components/ProfilePageComponents/ProfileInfoContainer";
import SidebarContentContainer from "./components/SidebarComponents/SidebarContentContainer";
import ProfileContainer from "./components/ProfilePageComponents/ProfileContainer";
import MessagesContainer from "./components/MessagesPageComponents/MessagesContainer";
import FriendsContainer from "./components/FriendsComponents/FriendsContainer";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";

let App = () => { 
  return (
    <div>
      <HeaderContainer />
      <div className="bgColor">
        <Route path="/profile/:userId?" render={() => <ProfileInfoContainer />} />
        <div className="content wrapper">
          <SidebarContentContainer />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/friends" render={() => <FriendsContainer />} />
        </div>
      </div> 
    </div>
  );
};

export default App;
