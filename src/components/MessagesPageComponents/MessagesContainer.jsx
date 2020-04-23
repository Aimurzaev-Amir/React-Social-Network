// import React from "react";
import Messages from "./Messages";
import {
  addAnswerActionCreator,
  updateNewAnswerTextActionCreator,
} from "../../Redux/messagesReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withRedirect";

let mapStateToProps = (state) => {
  return {
    newAnswerText: state.messagesPage.newAnswerText,
    MessagesItems: state.messagesPage.Messages,
    Answers: state.messagesPage.Answers,
    Dialogs: state.messagesPage.Dialogs,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addAnswer() {
      dispatch(addAnswerActionCreator());
    },
    updateNewAnswerText(text) {
      dispatch(updateNewAnswerTextActionCreator(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
