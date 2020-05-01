import messagesReducer, { addAnswer } from "./messagesReducer";
// import React from "react"

it("should add new line to arrow", () => {
  let action = addAnswer("Hi, whats up?");
  let state = {
    Answers: [
      {
        id: 1,
        userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend2.jpg"),
        answerText: "Hello! Good, thank you! And you?",
      },
      {
        id: 2,
        userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend2.jpg"),
        answerText:
          "Sorry, i did't say to you... I was with my parents at Jessicas birthday. It was at 20 o'clock.",
      },
      {
        id: 3,
        userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend2.jpg"),
        answerText:
          "It was great! You will not belive me, but there were Maroon 5!",
      },
      {
        id: 4,
        userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend2.jpg"),
        answerText: "Hello! Good, thank you! And you?",
      },
      {
        id: 5,
        userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend2.jpg"),
        answerText:
          "Sorry, i did't say to you... I was with my parents at Jessicas birthday. It was at 20 o'clock.",
      },
      {
        id: 6,
        userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend2.jpg"),
        answerText:
          "It was great! You will not belive me, but there were Maroon 5!",
      },
    ],
  };
  let newState = messagesReducer(state, action);
  expect(newState.Answers.length).toBe(7);
});
