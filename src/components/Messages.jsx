import React from "react";
import stl from "./MessagesPageComponents/Messages.module.css";
import DialogItem from "./MessagesPageComponents/DialogItem";
import Messages1USer from "./MessagesPageComponents/UserMessages/Messages1User";

let Messages = () => {
  return (
    <div className="pageContentstl">
      <div className={stl.dialogsGrid}>
        <div className={stl.dialogs}>
          <DialogItem
            userPhoto={require("./MessagesPageComponents/MessagesImg/Friend1.jpg")}
            userName="Alisa Keys"
          />
          <DialogItem
            userPhoto={require("./MessagesPageComponents/MessagesImg/Friend4.jpg")}
            userName="Jessica Alba"
          />
          <DialogItem
            userPhoto={require("./MessagesPageComponents/MessagesImg/Friend3.jpg")}
            userName="Ilon Mask"
          />
          <DialogItem
            userPhoto={require("./MessagesPageComponents/MessagesImg/Friend1.jpg")}
            userName="Alisa Keys"
          />
          <DialogItem
            userPhoto={require("./MessagesPageComponents/MessagesImg/Friend4.jpg")}
            userName="Jessica Alba"
          />
          <DialogItem
            userPhoto={require("./MessagesPageComponents/MessagesImg/Friend3.jpg")}
            userName="Ilon Mask"
          />
        </div>
        <Messages1USer />
      </div>
    </div>
  );
};

export default Messages;
