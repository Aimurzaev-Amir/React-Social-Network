import React from "react";
import stl from "./Messages.module.css";
import DialogItem from "./DialogItem";
import MessagesUser1 from "./MessagesUser1";

let Messages = (props) => {
  let DialogsElements = props.messagesPage.Dialogs.map((dialog) => {
    return (
      <DialogItem
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
        <MessagesUser1
          updateNewAnswerText={props.updateNewAnswerText}
          newAnswerText={props.messagesPage.newAnswerText}
          addAnswer={props.addAnswer}
          Messages={props.messagesPage.Messages}
          Answers={props.messagesPage.Answers}
        />
      </div>
    </div>
  );
};

export default Messages;
