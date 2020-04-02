import React from "react";
import PublicationAssessment from "./PublicationAssessment";
import PublicationAnswer from "./PublicationAnswer";
import UserCommentAnswer from "./UserCommentAnswer";
import PublisherCommentText from "./PublisherCommentText";
import PublicationUserDescription from "./PublicationUserDescription";
import PublishedTime from "./PublisherTime";
import stl from "./Publications.module.css"

let PagePublicationDescription = () => {
  return (
    <div className={stl.publicationDescription}>
      <PublicationUserDescription />
      <div className={stl.descriptionInfo}>
        <div className={stl.descriptionIntro}>
          <h4 className={stl.usersNameComment}>Sarah Cruiz</h4>
          <p className={stl.userFollowingStatus}>following</p>
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
