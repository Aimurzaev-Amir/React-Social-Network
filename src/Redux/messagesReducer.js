const addAnswer = "ADD-ANSWER";
const updateNewAnswerText = "UPDATE-NEW-ANSWER-TEXT";

const messagesReducer = (state, action) => {
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
