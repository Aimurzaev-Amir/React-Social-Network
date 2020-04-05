import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProfileInfo from "./components/ProfilePageComponents/ProfileInfo";
import SidebarContent from "./components/SidebarContent";
import Profile from "./components/ProfilePageComponents/Profile";
import Messages from "./components/MessagesPageComponents/Messages";

let App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="bgColor">
          <Route
            path="/src/components/ProfilePageComponents/"
            render={() => <ProfileInfo />}
          />
          <div className="content wrapper">
            <SidebarContent FriendsSideBar={props.FriendsSideBar} GroupsSidebar={props.GroupsSidebar} />
            <Route
              path="/src/components/ProfilePageComponents/"
              render={() => <Profile posts={props.posts} />}
            />
            <Route
              path="/src/components/MessagesPageComponents/"
              render={() => (
                <Messages
                  Dialogs={props.Dialogs}
                  Messages={props.Messages}
                  Answers={props.Answers}
                />
              )}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
