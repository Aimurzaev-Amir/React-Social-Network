// import React from "react";
import Messages from "./Messages";
import { addAnswerActionCreator, updateNewAnswerTextActionCreator, } from "../../Redux/messagesReducer";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
   newAnswerText: state.messagesPage.newAnswerText,
   MessagesItems: state.messagesPage.Messages,
   Answers: state.messagesPage.Answers,
   Dialogs: state.messagesPage.Dialogs,
  } 
}

let mapDispatchToProps = (dispatch) => {
  return {
    addAnswer () {
      dispatch(addAnswerActionCreator());
    },
    updateNewAnswerText (text) {
      dispatch(updateNewAnswerTextActionCreator(text));
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;
