const addAnswer = "ADD-ANSWER";
const updateNewAnswerText = "UPDATE-NEW-ANSWER-TEXT";

let initialState =  { 
  Dialogs: [
  {
    id: 1,
    userName: "Alisa Keys",
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
  },
  {
    id: 2,
    userName: "Jessica Alba",
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend4.jpg"),
  },
  {
    id: 3,
    userName: "Ilon Mask",
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend4.jpg"),
  },
  {
    id: 4,
    userName: "Jessica Alba",
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
  },
  {
    id: 5,
    userName: "Alisa Keys",
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend4.jpg"),
  },
  {
    id: 6,
    userName: "Ilon Mask",
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend3.jpg"),
  },
],

Messages: [
  {
    id: 1,
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
    messageText: "Hi! How are you?",
  },
  {
    id: 2,
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
    messageText: "Thank you, very well! Where you were yesterday?",
  },
  {
    id: 3,
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
    messageText:
      "Oh, it's OK. I was just worried about you. How birthday was?",
  },
  {
    id: 1,
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
    messageText: "Hi! How are you?",
  },
  {
    id: 2,
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
    messageText: "Thank you, very well! Where you were yerstoday?",
  },
  {
    id: 3,
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
    messageText:
      "Oh, it's OK. I was just worried about you. How birthday was?",
  },
],

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
],
newAnswerText: ""
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case addAnswer:
      let newAnswer = {
        id: 1,
        userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend2.jpg"),
        answerText: state.newAnswerText,
      };
      state.Answers.push(newAnswer);
      state.newAnswerText = "";
      return state;
    case updateNewAnswerText:
      state.newAnswerText = action.newAnswer;
      return state;
    default:
      return state;
  }
};

export let addAnswerActionCreator = () => {
  return {
    type: addAnswer,
  };
};

export let updateNewAnswerTextActionCreator = (text) => {
  return {
    type: updateNewAnswerText,
    newAnswer: text,
  };
};

export default messagesReducer;
