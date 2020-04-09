import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProfileInfo from "./components/ProfilePageComponents/ProfileInfo";
import SidebarContent from "./components/SidebarContent";
import Profile from "./components/ProfilePageComponents/Profile";
import Messages from "./components/MessagesPageComponents/Messages";

let App = (props) => {
  return (
    <div> 
      <Header />
      <div className="bgColor">
        <Route
          path="/profile"
          render={() => <ProfileInfo />}
        />
        <div className="content wrapper">
          <SidebarContent sidebarPage={props.state.sidebar} />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/messages"
            render={() => (
              <Messages
                messagesPage={props.state.messagesPage}
                dispatch={props.dispatch}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
