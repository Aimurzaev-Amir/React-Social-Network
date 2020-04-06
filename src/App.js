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
          <SidebarContent
            FriendsSideBar={props.FriendsSideBar}
            GroupsSidebar={props.GroupsSidebar}
          />
          <Route
            path="/src/components/ProfilePageComponents/"
            render={() => (
              <Profile
                posts={props.posts}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.newPostText}
                addPost={props.addPost}
              />
            )}
          />
          <Route
            path="/src/components/MessagesPageComponents/"
            render={() => (
              <Messages
                Dialogs={props.Dialogs}
                Messages={props.Messages}
                Answers={props.Answers}
                addAnswer={props.addAnswer}
                updateNewAnswerText={props.updateNewAnswerText}
                newAnswerText={props.newAnswerText}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
