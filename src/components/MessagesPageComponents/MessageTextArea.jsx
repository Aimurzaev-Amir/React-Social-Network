import React from "react";
import stl from "./Messages.module.css";
import SubmitBtn from "./MessagesImg/send.svg";
// import { addAnswerActionCreator , updateNewAnswerTextActionCreator } from "../../Redux/messagesReducer";

let MessageTextArea = (props) => {

  let addAnswer = () => {
    props.addAnswer();
  };

  let OnMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewAnswerText(text);
  };

  return (
    <div className={stl.messageInput}>
      <input
        onChange={OnMessageChange}
        placeholder="Write a message"
        value={props.newAnswerText}
      ></input>
      <div onClick={addAnswer} className={stl.submitMessageBtn}>
        <img src={SubmitBtn} alt="" />
      </div>
    </div>
  );
};

export default MessageTextArea;
