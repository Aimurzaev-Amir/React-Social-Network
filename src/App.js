import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProfileInfo from "./components/ProfilePageComponents/ProfileInfo";
import SidebarContentContainer from "./components/SidebarComponents/SidebarContentContainer";
// import Profile from "./components/ProfilePageComponents/Profile";
// import Messages from "./components/MessagesPageComponents/Messages";
import ProfileContainer from "./components/ProfilePageComponents/ProfileContainer";
import MessagesContainer from "./components/MessagesPageComponents/MessagesContainer";

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
        </div>
      </div>
    </div>
  );
};

export default App;
