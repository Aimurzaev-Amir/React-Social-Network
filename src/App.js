import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProfileInfo from "./components/ProfileInfo";
import SidebarContent from "./components/SidebarContent";
import Profile from "./components/Profile";
import Messages from "./components/Messages";


let App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header /> 
        <div className="bgColor">
        <Route path="/src/components/Profile.jsx" component={ProfileInfo} />
          {/* <ProfileInfo /> */}
          <div className="content wrapper">
            <SidebarContent />
            {/* <Profile /> */}
            <Route path="/src/components/Profile.jsx" component={Profile} />
            <Route path="/src/components/Messages.jsx" component={Messages} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
