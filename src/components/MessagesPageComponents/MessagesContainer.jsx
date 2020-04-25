// import React from "react";
import Messages from "./Messages";
import { addAnswer } from "../../Redux/messagesReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withRedirect";

let mapStateToProps = (state) => {
  return {
    MessagesItems: state.messagesPage.Messages,
    Answers: state.messagesPage.Answers,
    Dialogs: state.messagesPage.Dialogs,
  };
};

export default compose(
  connect(mapStateToProps, { addAnswer }),
  withAuthRedirect
)(Messages);
