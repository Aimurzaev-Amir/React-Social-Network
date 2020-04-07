import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { addPost } from "./Redux/State";
import { addAnswer } from "./Redux/State";
import { updateNewPostText } from "./Redux/State";
import { updateNewAnswerText } from "./Redux/State";
import {subscribe} from "./Redux/State";
import state from "./Redux/State";

let rerenderEntireTree = (state) => {
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

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
