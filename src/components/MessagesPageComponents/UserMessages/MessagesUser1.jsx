import React from "react";
import stl from "../Messages.module.css";
import Message from "../Message";
import Answer from "../Answer";

let Messages1USer = (props) => {

  let MessagesElements = props.Messages.map(message => {
    return (
      <Message
        id={message.id}
        userPhoto={message.userPhoto}
        messageText={message.messageText}
      />
    );
  });

  let AnswersElements = props.Answers.map(answer => {
    return (
      <Answer
        id={answer.id}
        userPhoto={answer.userPhoto}
        answerText={answer.answerText}
      />
    );
  });

  return (
    <div className={stl.messages}>
      {MessagesElements}
      {AnswersElements}
    </div>
  );
};

export default Messages1USer;
