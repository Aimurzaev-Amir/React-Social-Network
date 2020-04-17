import React from "react";
import stl from "./Publications.module.css";
import PagePublicationStatus from "./PagePublicationStatus";
import PagePublicationPhoto from "./PagePublicationPhoto";
import PublicationUserDescriptionPhoto from "./PublicationUserDescriptionPhoto";
import PagePublicationUser from "./PagePublicationUser";
import PublicationAssessment from "./PublicationAssessment";
import PublishedTime from "./PublisherTime";
import PublisherCommentText from "./PublisherCommentText";
import PublicationAnswer from "./PublicationAnswer";
import UserCommentAnswer from "./UserCommentAnswer";

let PagePublication = (props) => {
  let PagePublicationsElements = props.posts.map((post) => {
    return (
      <div className={stl.publications} key={post.id}>
        <PagePublicationStatus when={post.when} userName={post.userName} />
        <PagePublicationPhoto PublicationPhoto={post.PublicationPhoto} />
        <div className={stl.publicationDescription}>
          <PublicationUserDescriptionPhoto UserComment1={post.UserComment1} />
          <div className={stl.descriptionInfo}>
            <div className={stl.descriptionIntro}>
              <PagePublicationUser userName={post.userName} />
              <PublicationAssessment
                likes={post.likes}
                dislikes={post.dislikes}
              />
            </div>
            <PublishedTime Time={post.Time} />
            <PublisherCommentText publicationText={post.publicationText} />
            <PublicationAnswer
              CommentAnswer={post.CommentAnswer}
              answerUsersName={post.answerUsersName}
              usersAnswer={post.usersAnswer}
              commentNumbers={post.commentNumbers}
            />
            <UserCommentAnswer UserAnswerIcon={post.UserAnswerIcon} />
          </div>
        </div>
      </div>
    );
  });

  return <div>{PagePublicationsElements}</div>;
};

export default PagePublication;
