import React from "react";
import stl from "../Messages.module.css";
import Message from "../Message";
import Answer from "../Answer";

let Messages1USer = () => {
  let Messages = [
    {
      id: 1,
      userPhoto: require("../MessagesImg/Friend1.jpg"),
      messageText: "Hi! How are you?"
    },
    {
      id: 2,
      userPhoto: require("../MessagesImg/Friend1.jpg"),
      messageText: "Thank you, very well! Where you were yerstoday?"
    },
    {
      id: 3,
      userPhoto: require("../MessagesImg/Friend1.jpg"),
      messageText:
        "Oh, it's OK. I was just worried about you. How birthday was?"
    }
  ];

  let Answers = [
    {
      id: 1,
      userPhoto: require("../MessagesImg/Friend2.jpg"),
      answerText: "Hello! Good, thank you! And you?"
    },
    {
      id: 2,
      userPhoto: require("../MessagesImg/Friend2.jpg"),
      answerText:
        "Sorry, i did't say to you... I was with my parents at Jessicas birthday. It was at 20 o'clock."
    },
    {
      id: 3,
      userPhoto: require("../MessagesImg/Friend2.jpg"),
      answerText:
        "It was great! You will not belive me, but there were Maroon 5!"
    }
  ];

  let MessagesElements = Messages.map(message => {
    return (
      <Message
        id={message.id}
        userPhoto={message.userPhoto}
        messageText={message.messageText}
      />
    );
  });

  let AnswersElements = Answers.map(answer => {
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
