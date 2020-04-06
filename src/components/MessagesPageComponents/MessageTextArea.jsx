import React from "react";
import stl from "./Messages.module.css";
import SubmitBtn from "./MessagesImg/send.svg";

let MessageTextArea = (props) => {
  let NewAnswerElement = React.createRef();

  let addAnswer = () => {
    props.addAnswer();
  };

  let OnMessageChange = () => {
    let text = NewAnswerElement.current.value;
    props.updateNewAnswerText(text);
  };

  return (
    <div className={stl.messageTextArea}>
      <textarea
        onChange={OnMessageChange}
        ref={NewAnswerElement}
        name="messageTextArea"
        placeholder="Write a message"
        value={props.newAnswerText}
      ></textarea>
      <div onClick={addAnswer} className={stl.submitMessageBtn}>
        <img src={SubmitBtn} alt="" />
      </div>
    </div>
  );
};

export default MessageTextArea;
