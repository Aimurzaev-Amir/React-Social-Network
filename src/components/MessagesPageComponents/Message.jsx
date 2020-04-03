import React from "react";
import stl from "./Messages.module.css";

let Message = props => {
  return (
    <div className={stl.message}>
      <div className={stl.dialogsItemPhoto}>
        <img src={props.userPhoto} alt="" />
      </div>
      <div className={stl.userMessage}>
        <p>{props.messageText}</p>
      </div>
    </div>
  );
};

export default Message;
