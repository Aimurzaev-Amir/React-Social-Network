import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
  {
    id: 1,
    when: "Sometime ago",
    PublicationPhoto: require("./components/ProfilePageComponents/PublicationsComponents/PublicationsImg/PublishedPhoto.jpg"),
    UserComment1: require("./components/ProfilePageComponents/PublicationsComponents/PublicationsImg/UserComment1.png"),
    userName: "Alisa Keys",
    publicationText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud",
    likes: 24,
    dislikes: 3,
    Time: "36 mins",
    CommentAnswer: require("./components/ProfilePageComponents/PublicationsComponents/PublicationsImg/UserComment2.png"),
    answerUsersName: "Carina",
    usersAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    commentNumbers: 10,
      UserAnswerIcon: require("./components/ProfilePageComponents/PublicationsComponents/PublicationsImg/user-photo.png")
  },
  {
    id: 2,
    when: "Yesterday",
    PublicationPhoto: require("./components/ProfilePageComponents/PublicationsComponents/PublicationsImg/winter.jpg"),
    UserComment1: require("./components/ProfilePageComponents/PublicationsComponents/PublicationsImg/UserComment2.png"),
    userName: "Kristina Next",
    publicationText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud",
    likes: 38,
    dislikes: 1,
    Time: "2 days",
    CommentAnswer: require("./components/ProfilePageComponents/PublicationsComponents/PublicationsImg/UserComment1.png"),
    answerUsersName: "Melany",
    usersAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    commentNumbers: 6,
      UserAnswerIcon: require("./components/ProfilePageComponents/PublicationsComponents/PublicationsImg/user-photo.png")
  }
];

let Dialogs = [
  {
    id: 1,
    userName: "Alisa Keys",
    userPhoto: require("./components/MessagesPageComponents/MessagesImg/Friend1.jpg")
  },
  {
    id: 2,
    userName: "Jessica Alba",
    userPhoto: require("./components/MessagesPageComponents/MessagesImg/Friend4.jpg")
  },
  {
    id: 3,
    userName: "Ilon Mask",
    userPhoto: require("./components/MessagesPageComponents/MessagesImg/Friend4.jpg")
  },
  {
    id: 4,
    userName: "Jessica Alba",
    userPhoto: require("./components/MessagesPageComponents/MessagesImg/Friend1.jpg")
  },
  {
    id: 5,
    userName: "Alisa Keys",
    userPhoto: require("./components/MessagesPageComponents/MessagesImg/Friend4.jpg")
  },
  {
    id: 6,
    userName: "Ilon Mask",
    userPhoto: require("./components/MessagesPageComponents/MessagesImg/Friend3.jpg")
  }
];

let Messages = [
  {
    id: 1,
    userPhoto: require("./components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
    messageText: "Hi! How are you?"
  },
  {
    id: 2,
    userPhoto: require("./components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
    messageText: "Thank you, very well! Where you were yerstoday?"
  },
  {
    id: 3,
    userPhoto: require("./components/MessagesPageComponents/MessagesImg/Friend1.jpg"),
    messageText:
      "Oh, it's OK. I was just worried about you. How birthday was?"
  }
];

let Answers = [
  {
    id: 1,
    userPhoto: require("./components/MessagesPageComponents/MessagesImg/Friend2.jpg"),
    answerText: "Hello! Good, thank you! And you?"
  },
  {
    id: 2,
    userPhoto: require("./components/MessagesPageComponents/MessagesImg/Friend2.jpg"),
    answerText:
      "Sorry, i did't say to you... I was with my parents at Jessicas birthday. It was at 20 o'clock."
  },
  {
    id: 3,
    userPhoto: require("./components/MessagesPageComponents/MessagesImg/Friend2.jpg"),
    answerText:
      "It was great! You will not belive me, but there were Maroon 5!"
  }
];

ReactDOM.render(
    <App Dialogs={Dialogs} posts={posts} Messages={Messages} Answers={Answers}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
