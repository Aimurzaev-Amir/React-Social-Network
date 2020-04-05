import React from "react";
import stl from "./Publications.module.css";
import PagePublicationStatus from "./PagePublicationStatus";
import PagePublicationPhoto from "./PagePublicationPhoto";
import PagePublicationDescription from "./PagePublicationDescription";

let PagePublication = (props) => {
  let PagePublicationsElements = props.posts.map((post) => {
    return (
      <div className={stl.publications}>
        <PagePublicationStatus when={post.when} userName={post.userName} />
        <PagePublicationPhoto PublicationPhoto={post.PublicationPhoto} />
        <PagePublicationDescription
          userName={post.userName}
          UserComment1={post.UserComment1}
          publicationText={post.publicationText}
          likes={post.likes}
          dislikes={post.dislikes}
          Time={post.Time}
          CommentAnswer={post.CommentAnswer}
          answerUsersName={post.answerUsersName}
          usersAnswer={post.usersAnswer}
          UserAnswerIcon={post.UserAnswerIcon}
        />
      </div>
    );
  });

  return <div>{PagePublicationsElements}</div>;
};

export default PagePublication;
