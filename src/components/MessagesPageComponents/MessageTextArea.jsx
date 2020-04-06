import React from "react";
import stl from "./Messages.module.css";
import SubmitBtn from "./MessagesImg/send.svg";

let NewMessageElement = React.createRef();

let addMessage = () => {
  let text = NewMessageElement.current.value;
  alert(text);
};


let MessageTextArea = () => {
    return(
        <div className={stl.messageTextArea}>
        <textarea
          ref={NewMessageElement}
          name="messageTextArea"
          placeholder="Write a message"
        ></textarea>
        <div onClick={addMessage} className={stl.submitMessageBtn}>
          <img src={SubmitBtn} alt="" />
        </div>
      </div>
    )
}

export default MessageTextArea;