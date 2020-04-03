import React from "react";
import stl from "../Messages.module.css";
import Message from "../Message";
import Answer from "../Answer";

let Messages1USer = () => {
    return(
        <div className={stl.messages}>
          <Message
            userPhoto={require("../MessagesImg/Friend1.jpg")}
            messageText="Hi! How are you?"
          />
          <Answer
            userPhoto={require("../MessagesImg/Friend2.jpg")}
            answerText="Hello! Good, thank you! And you?"
          />
          <Message
            userPhoto={require("../MessagesImg/Friend1.jpg")}
            messageText="Thank you, very well! Where you were yerstoday?"
          />
          <Answer
            userPhoto={require("../MessagesImg/Friend2.jpg")}
            answerText="Sorry, i did't say to you... I was with my parents at Jessicas birthday. It was at 20 o'clock."
          />
          <Message
            userPhoto={require("../MessagesImg/Friend1.jpg")}
            messageText="Oh, it's OK. I was just worried about you. How birthday was? "
          />
          <Answer
            userPhoto={require("../MessagesImg/Friend2.jpg")}
            answerText="It was great! You will not belive me, but there were Maroon 5!"
          />
        </div>
    )
}

export default Messages1USer;