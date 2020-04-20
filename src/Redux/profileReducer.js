const addPostType = "ADD-POST";
const updateNewPostTextType = "UPDATE-NEW-POST-TEXT";
const setUserProfileType = "SET-USER-PROFILE"

let initialState = {
  profile: null,
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
    case addPostType :
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
    case updateNewPostTextType :
      return {
        ...state,
        newPostText: action.newText,
      };
      case setUserProfileType:
        return {
          ...state,
          profile: action.ProfileInfo,
        }
    default:
      return state;
  }
};

export let addPost = () => {
  return {
    type: addPostType,
  };
};

export let updateNewPostText = (newText) => {
  return {
    type: updateNewPostTextType, newText
  };
};

export let setUserProfile = (ProfileInfo) => {
  return {
    type: setUserProfileType, ProfileInfo
  }
}

export default profileReducer;
