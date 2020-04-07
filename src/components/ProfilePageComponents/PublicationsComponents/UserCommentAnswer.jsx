import React from "react";
import stl from "./Publications.module.css";
import btnSend from "./PublicationsImg/send.svg";

let UserCommentAnswer = (props) => {
  return (
    <div className={stl.userAnswer}>
      <img src={props.UserAnswerIcon} alt="Users icon" />
      <input type="text" placeholder="Post a comment" />
      <div className={stl.submitMessageBtn}><img src={btnSend} alt=""/></div>
    </div>
  );
};

export default UserCommentAnswer;
