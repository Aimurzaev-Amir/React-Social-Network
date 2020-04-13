const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    {
      id: 1,
      when: "Sometime ago",
      PublicationPhoto: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/PublishedPhoto.jpg"),
      UserComment1: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/UserComment1.png"),
      userName: "Alisa Keys",
      publicationText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud",
      likes: 24,
      dislikes: 3,
      Time: "36 mins",
      CommentAnswer: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/UserComment2.png"),
      answerUsersName: "Carina",
      usersAnswer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      commentNumbers: 10,
      UserAnswerIcon: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/user-photo.png"),
    },
    {
      id: 2,
      when: "Yesterday",
      PublicationPhoto: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/winter.jpg"),
      UserComment1: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/UserComment2.png"),
      userName: "Kristina Next",
      publicationText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud",
      likes: 38,
      dislikes: 1,
      Time: "2 days",
      CommentAnswer: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/UserComment1.png"),
      answerUsersName: "Melany",
      usersAnswer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      commentNumbers: 6,
      UserAnswerIcon: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/user-photo.png"),
    },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
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
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case updateNewPostText:
      return {
        ...state,
        newPostText: action.newText,
      };
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
