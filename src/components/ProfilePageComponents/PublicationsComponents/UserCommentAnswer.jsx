import React from "react";
import stl from "./Publications.module.css";

let UserCommentAnswer = (props) => {
  return (
    <div className={stl.userAnswer}>
      <img src={props.UserAnswerIcon} alt="Users icon" />
      <input type="text" placeholder="Post a comment" />
    </div>
  );
};

export default UserCommentAnswer;
