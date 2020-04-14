import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProfileInfo from "./components/ProfilePageComponents/ProfileInfo";
import SidebarContentContainer from "./components/SidebarComponents/SidebarContentContainer";
import ProfileContainer from "./components/ProfilePageComponents/ProfileContainer";
import MessagesContainer from "./components/MessagesPageComponents/MessagesContainer";
import FriendsContainer from "./components/FriendsComponents/FriendsContainer";

let App = () => {
  return (
    <div>
      <Header />
      <div className="bgColor">
        <Route path="/profile" render={() => <ProfileInfo />} />
        <div className="content wrapper">
          <SidebarContentContainer />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/friends" render={() => <FriendsContainer />} />
        </div>
      </div>
    </div>
  );
};

export default App;
