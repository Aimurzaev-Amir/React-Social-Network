import React from "react";
import stl from "./Messages.module.css";
import Message from "./Message";
import Answer from "./Answer";
import MessageTextArea from "./MessageTextArea";

let UserMessages = (props) => {
  let MessagesElements = props.MessagesItems.map((message) => {
    return (
      <Message
        key={message.id}
        id={message.id}
        userPhoto={message.userPhoto}
        messageText={message.messageText}
      />
    );
  });

  let AnswersElements = props.Answers.map((answer) => {
    return (
      <Answer
        key={answer.id}
        id={answer.id}
        userPhoto={answer.userPhoto}
        answerText={answer.answerText}
      />
    );
  });

  const sendMessage = (newAnswerText) => {
    props.addAnswer(newAnswerText.newMessage);
  };
  return (
    <div className={stl.messagesWindow}>
      <div className={stl.messages}>
        {MessagesElements}
        {AnswersElements}
      </div>
      <MessageTextArea addAnswer={props.addAnswer} onSubmit={sendMessage} />
    </div>
  );
};

export default UserMessages;
