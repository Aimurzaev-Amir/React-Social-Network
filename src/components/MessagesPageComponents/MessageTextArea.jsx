import React from "react";
import stl from "./Messages.module.css";
import SubmitBtn from "./MessagesImg/send.svg";

let MessageTextArea = (props) => {
  
  let NewAnswerElement = React.createRef();

  let addAnswer = () => {
    props.dispatch({type:"ADD-ANSWER"}); 
  };

  let OnMessageChange = () => {
    let text = NewAnswerElement.current.value;
    props.dispatch({type:"UPDATE-NEW-ANSWER-TEXT", newAnswer: text});
  };

  return (
    <div className={stl.messageInput}>
      <input
        onChange={OnMessageChange}
        ref={NewAnswerElement}
        name="messageTextArea"
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
