import React from "react";
import stl from "./Messages.module.css";
import Message from "./Message";
import Answer from "./Answer";
import MessageTextArea from "./MessageTextArea";

let UserMessages = (props) => {
  let MessagesElements = props.MessagesItems.map((message) => {
    return (
      <Message
        id={message.id}
        userPhoto={message.userPhoto}
        messageText={message.messageText}
      />
    );
  });

  let AnswersElements = props.Answers.map((answer) => {
    return (
      <Answer
        id={answer.id}
        userPhoto={answer.userPhoto}
        answerText={answer.answerText}
      />
    );
  });

  return (
    <div className={stl.messagesWindow}>
      <div className={stl.messages}>
        {MessagesElements}
        {AnswersElements}
      </div>
      <MessageTextArea
        newAnswerText={props.newAnswerText}
        addAnswer={props.addAnswer}
        updateNewAnswerText={props.updateNewAnswerText}
      />
    </div>
  );
};

export default UserMessages;
