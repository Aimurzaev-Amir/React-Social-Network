import React from "react";
import stl from "./Messages.module.css";
import DialogItem from "./DialogItem";
import UserMessages from "./UserMessages";

let Messages = (props) => {
  let DialogsElements = props.Dialogs.map((dialog) => {
    return (
      <DialogItem
        key={dialog.id}
        id={dialog.id}
        userName={dialog.userName}
        userPhoto={dialog.userPhoto}
      />
    );
  });

  return (
    <div className="pageContentstl">
      <div className={stl.dialogsGrid}>
        <div className={stl.dialogs}>{DialogsElements}</div>
        <UserMessages
          Answers={props.Answers}
          MessagesItems={props.MessagesItems}
          addAnswer={props.addAnswer}
        />
      </div>
    </div>
  );
};

export default Messages;
