import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state from "./Redux/State";

ReactDOM.render(
  <App
    Dialogs={state.messagesPage.Dialogs}
    posts={state.profilePage.posts}
    Messages={state.messagesPage.Messages}
    Answers={state.messagesPage.Answers}
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
