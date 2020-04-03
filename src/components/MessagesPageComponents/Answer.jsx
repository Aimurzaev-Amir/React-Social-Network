import React from "react";
import stl from "./Messages.module.css";

let Answer = props => {
  return (
    <div className={stl.answer}>
      <div className={stl.userAnswer}>
        <p>{props.answerText}</p>
      </div>
      <div className={stl.dialogsItemPhoto}>
        <img src={props.userPhoto} alt="" />
      </div>
    </div>
  );
};

export default Answer;
