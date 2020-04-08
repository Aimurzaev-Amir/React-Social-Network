const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case addPost:
      let newPost = {
        id: 3,
        PublicationPhoto: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/PublishedPhoto.jpg"),
        UserComment1: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/UserComment1.png"),
        userName: "Amir Aimurzayev",
        publicationText: state.newPostText,
        likes: 0,
        dislikes: 0,
        Time: "0 mins",
        CommentAnswer: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/UserComment2.png"),
        answerUsersName: "Adelya",
        usersAnswer:
          "Привет, это мой первый пост по кнопке, это ответ на коммент к посту.",
        commentNumbers: 0,
        UserAnswerIcon: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/user-photo.png"),
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case updateNewPostText:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export let addPostActionCreator = () => {
  return {
    type: addPost,
  };
};

export let updateNewPostTextActionCreator = (text) => {
  return {
    type: updateNewPostText,
    newText: text,
  };
};

export default profileReducer;
