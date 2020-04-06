import React from "react";
import ContentBar from "./Content/ContentBar/ContentBar";
import ContentBanner from "./Content/ContentBanner/ContentBanner";
import ContentViewProfile from "./Content/ContentViewProfile/ContentViewProfile";
import ContentSkills from "./Content/ContentSkills/ContentSkills";
import ContentStrengths from "./Content/ContentStrengths/ContentStrengths";
import ContentPortfolio from "./Content/ContentPortfolio/ContentPortfolio";
import WritePublication from "./PublicationsComponents/WritePublication/writePublication";
import PagePublication from "./PublicationsComponents/PagePublication";

let Profile = (props) => {
  return (
    <div className="pageContentstl">
      <ContentBar />
      <ContentBanner />
      <ContentViewProfile />
      <ContentSkills />
      <ContentStrengths />
      <ContentPortfolio />
      <WritePublication
        updateNewPostText={props.updateNewPostText}
        newPostText={props.newPostText}
        addPost={props.addPost}
      />
      <PagePublication posts={props.posts} />
    </div>
  );
};

export default Profile;
