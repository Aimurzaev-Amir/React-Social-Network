let store = {
  
}

let rerenderEntireTree = () => {
}
let state = {
  profilePage: {
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
  },
  messagesPage: {
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
    newAnswerText: "",
  },
  sidebar: {
    FriendsSideBar: [
      {
        id: 1,
        FriendImg: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Friends/Friend1.jpg"),
        FriendName: "Emma Taylor",
      },
      {
        id: 2,
        FriendImg: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Friends/Friend2.jpg"),
        FriendName: "Ilon Mask",
      },
      {
        id: 3,
        FriendImg: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Friends/Friend3.jpg"),
        FriendName: "Jessica Alba",
      },
      {
        id: 4,
        FriendImg: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Friends/Friend4.jpg"),
        FriendName: "Alisa Keys",
      },
    ],
    GroupsSidebar: [
      {
        id: 1,
        Group1Img: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Groups/Group1.jpg"),
        GroupName: "NASA",
      },
      {
        id: 2,
        Group1Img: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Groups/Group2.jpg"),
        GroupName: "Tesla",
      },
      {
        id: 3,
        Group1Img: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Groups/Group3.jpg"),
        GroupName: "UI/UX Coders",
      },
      {
        id: 4,
        Group1Img: require("../components/ProfilePageComponents/SidebarComponents/SidebarImg/Groups/Group4.jpg"),
        GroupName: "Just for fun",
      },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 3,
    PublicationPhoto: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/PublishedPhoto.jpg"),
    UserComment1: require("../components/ProfilePageComponents/PublicationsComponents/PublicationsImg/UserComment1.png"),
    userName: "Amir Aimurzayev",
    publicationText: state.profilePage.newPostText,
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
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
  updateNewPostText("");
};

export let addAnswer = () => {
  let newAnswer = {
    id: 1,
    userPhoto: require("../components/MessagesPageComponents/MessagesImg/Friend2.jpg"),
    answerText: state.messagesPage.newAnswerText,
  };
  state.messagesPage.Answers.push(newAnswer);
  rerenderEntireTree(state);
  updateNewAnswerText("");
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let updateNewAnswerText = (newAnswer) => {
  state.messagesPage.newAnswerText = newAnswer;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer; //observer
}

export default state; 
