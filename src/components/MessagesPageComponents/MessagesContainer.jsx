import React from "react";
import Messages from "./Messages";
import {
  addAnswerActionCreator,
  updateNewAnswerTextActionCreator,
} from "../../Redux/messagesReducer";
import StoreContext from "../../StoreContext";
let MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let newAnswerText = store.getState().messagesPage.newAnswerText;
        let MessagesItems = store.getState().messagesPage.Messages;
        let Answers = store.getState().messagesPage.Answers;
        let Dialogs = store.getState().messagesPage.Dialogs;
      
        let addAnswer = () => {
          store.dispatch(addAnswerActionCreator());
        };
      
        let updateNewAnswerText = (text) => {
          store.dispatch(updateNewAnswerTextActionCreator(text));
        };
        return (
          <Messages
            Answers={Answers}
            MessagesItems={MessagesItems}
            newAnswerText={newAnswerText}
            addAnswer={addAnswer}
            updateNewAnswerText={updateNewAnswerText}
            Dialogs={Dialogs} />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
