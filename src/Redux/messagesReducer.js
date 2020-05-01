const addAnswerType = "MESSAGES_REDUCER/ADD-ANSWER";

let initialState = {
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
      userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend4.jpg"),
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
      id: 4,
      userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
      messageText: "Hi! How are you?",
    },
    {
      id: 5,
      userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
      messageText: "Thank you, very well! Where you were yerstoday?",
    },
    {
      id: 6,
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

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case addAnswerType:
      let newAnswer = {
        id: 1,
        userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend2.jpg"),
        answerText: action.newAnswerText,
      };
      return { 
        ...state,
        Answers: [...state.Answers, newAnswer],
      };
    default:
      return state;
  }
};

export const addAnswer = (newAnswerText) => {
  return {
    type: addAnswerType, newAnswerText
  };
};


export default messagesReducer;
