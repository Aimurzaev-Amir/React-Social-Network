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
          path="/src/components/ProfilePageComponents/"
          render={() => <ProfileInfo />}
        />
        <div className="content wrapper">
          <SidebarContent sidebarPage={props.state.sidebar} />
          <Route
            path="/src/components/ProfilePageComponents/"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
              />
            )}
          />
          <Route
            path="/src/components/MessagesPageComponents/"
            render={() => (
              <Messages
                messagesPage={props.state.messagesPage}
                addAnswer={props.addAnswer}
                updateNewAnswerText={props.updateNewAnswerText}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
