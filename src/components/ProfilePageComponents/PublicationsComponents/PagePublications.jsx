import React from "react";
import PagePublication from "./PagePublication";

let PagePublications = () => {
  let posts = [
    {
      id: 1,
      when: "Sometime ago",
      PublicationPhoto: require("./PublicationsImg/PublishedPhoto.jpg"),
      UserComment1: require("./PublicationsImg/UserComment1.png"),
      userName: "Alisa Keys",
      publicationText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud",
      likes: 24,
      dislikes: 3,
      Time: "36 mins",
      CommentAnswer: require("./PublicationsImg/UserComment2.png"),
      answerUsersName: "Carina",
      usersAnswer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      UserAnswerIcon: require("./PublicationsImg/user-photo.png")
    },
    {
      id: 2,
      when: "Yesterday",
      PublicationPhoto: require("./PublicationsImg/winter.jpg"),
      UserComment1: require("./PublicationsImg/UserComment2.png"),
      userName: "Kristina Next",
      publicationText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud",
      likes: 38,
      dislikes: 1,
      Time: "2 days",
      CommentAnswer: require("./PublicationsImg/UserComment1.png"),
      answerUsersName: "Melany",
      usersAnswer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      UserAnswerIcon: require("./PublicationsImg/user-photo.png")
    }
  ];

  let PublicationsElements = posts.map(post => {
    return (
      <PagePublication
        when={post.when}
        PublicationPhoto={post.PublicationPhoto}
        UserComment1={post.UserComment1}
        userName={post.userName}
        publicationText={post.publicationText}
        likes={post.likes}
        dislikes={post.dislikes}
        Time={post.Time}
        CommentAnswer={post.CommentAnswer}
        answerUsersName={post.answerUsersName}
        usersAnswer={post.usersAnswer}
        UserAnswerIcon={post.UserAnswerIcon}
      />
    );
  });

  return <div>{PublicationsElements}</div>;
};

export default PagePublications;
