import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { addPost } from "./Redux/State";
import { addAnswer } from "./Redux/State"
import {updateNewPostText} from "./Redux/State"
import { updateNewAnswerText } from "./Redux/State";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
    <App
      Dialogs={state.messagesPage.Dialogs}
      posts={state.profilePage.posts}
      Messages={state.messagesPage.Messages}
      Answers={state.messagesPage.Answers}
      FriendsSideBar={state.sidebar.FriendsSideBar}
      GroupsSidebar={state.sidebar.GroupsSidebar}
      addPost={addPost}
      addAnswer={addAnswer}
      updateNewPostText={updateNewPostText}
      newPostText={state.profilePage.newPostText}
      updateNewAnswerText={updateNewAnswerText}
      newAnswerText={state.messagesPage.newAnswerText}
    />
    </BrowserRouter>,
    document.getElementById("root")
  );
};