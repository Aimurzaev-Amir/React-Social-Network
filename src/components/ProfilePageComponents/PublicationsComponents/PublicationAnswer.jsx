import React from "react";
import stl from "./Publications.module.css";

let PublicationAnswer = (props) => {
  return (
    <div className={stl.publicationAnswer}>
      <div className={stl.publicationAnswerPhoto}>
        <img
          src={props.CommentAnswer}
          alt="be able user publications comment"
        />
      </div>
      <div className={stl.publicationAnswerComment}>
        <p>
          <span>{props.answerUsersName}</span>
          {props.usersAnswer}
        </p>
        <div className={stl.publicationAllAnswers}>
          <p>Show all comments ({props.commentNumbers}) </p>
        </div>
      </div>
    </div>
  );
};

export default PublicationAnswer;
