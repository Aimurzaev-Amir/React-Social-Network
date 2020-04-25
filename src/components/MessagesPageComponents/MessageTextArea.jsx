import React from "react";
import stl from "./Messages.module.css";
import SubmitBtn from "./MessagesImg/send.svg";
import { reduxForm, Field } from "redux-form";

let MessageTextArea = (props) => {
  return (
    <form className={stl.messageInput} onSubmit={props.handleSubmit}>
      <Field
        placeholder="Write a message"
        name="newMessage"
        component="textarea"
      />
      <button className={stl.sendButton}>
        <img src={SubmitBtn} alt="submit" />
      </button>
    </form>
  ); 
};

const MessageReduxForm = reduxForm({ form: "Messages" })(MessageTextArea);

export default MessageReduxForm;
