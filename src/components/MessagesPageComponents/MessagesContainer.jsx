import React from "react";
import Messages from "./Messages";
import {
  addAnswerActionCreator,
  updateNewAnswerTextActionCreator,
} from "../../Redux/messagesReducer";
let MessagesContainer = (props) => {
  let newAnswerText = props.store.getState().messagesPage.newAnswerText;
  let MessagesItems = props.store.getState().messagesPage.Messages;
  let Answers = props.store.getState().messagesPage.Answers;
  let Dialogs = props.store.getState().messagesPage.Dialogs;

  let addAnswer = () => {
    props.store.dispatch(addAnswerActionCreator());
  };

  let updateNewAnswerText = (text) => {
    props.store.dispatch(updateNewAnswerTextActionCreator(text));
  };

  return (
    <Messages
      Answers={Answers}
      MessagesItems={MessagesItems}
      newAnswerText={newAnswerText}
      addAnswer={addAnswer}
      updateNewAnswerText={updateNewAnswerText}
      Dialogs={Dialogs}
    />
  );
};

export default MessagesContainer;
