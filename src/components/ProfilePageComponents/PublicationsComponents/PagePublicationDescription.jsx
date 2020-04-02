import React from "react";
import PublicationAssessment from "./PublicationAssessment";
import PublicationAnswer from "./PublicationAnswer";
import UserCommentAnswer from "./UserCommentAnswer";
import PublisherCommentText from "./PublisherCommentText";
import PublicationUserDescription from "./PublicationUserDescription";
import PublishedTime from "./PublisherTime";

let PagePublicationDescription = () => {
  return (
    <div className="publicationDescription">
      <PublicationUserDescription />
      <div className="descriptionInfo">
        <div className="descriptionIntro">
          <h4 className="usersNameComment">Sarah Cruiz</h4>
          <p className="userFollowingStatus">following</p>
          <PublicationAssessment />
        </div>
        <PublishedTime />
        <PublisherCommentText />
        <PublicationAnswer />
        <UserCommentAnswer />
      </div>
    </div>
  );
};

export default PagePublicationDescription;
