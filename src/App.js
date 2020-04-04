import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProfileInfo from "./components/ProfilePageComponents/ProfileInfo";
import SidebarContent from "./components/SidebarContent";
import Profile from "./components/ProfilePageComponents/Profile";
import Messages from "./components/MessagesPageComponents/Messages";

let App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="bgColor">
          <Route path="/src/components/ProfilePageComponents/" component={ProfileInfo} />
          <div className="content wrapper">
            <SidebarContent />
            <Route path="/src/components/ProfilePageComponents/" component={Profile} />
            <Route
              path="/src/components/MessagesPageComponents/"
              component={Messages}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
