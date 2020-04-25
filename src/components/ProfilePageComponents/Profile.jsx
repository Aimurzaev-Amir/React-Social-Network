import React from "react";
import ContentBar from "./Content/ContentBar/ContentBar";
import ContentBanner from "./Content/ContentBanner/ContentBanner";
import ContentViewProfile from "./Content/ContentViewProfile/ContentViewProfile";
import ContentSkills from "./Content/ContentSkills/ContentSkills";
import ContentStrengths from "./Content/ContentStrengths/ContentStrengths";
import ContentPortfolio from "./Content/ContentPortfolio/ContentPortfolio";
import WritePublication from "./PublicationsComponents/WritePublication/writePublication";
import PagePublication from "./PublicationsComponents/PagePublication";
import Preloader from "../../common/preloader/Preloader";

let Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const sendPost = (newPost) => {
    props.addPost(newPost.newPostText);
  };
  return (
    <div className="pageContentstl">
      <ContentBar />
      <ContentBanner />
      <ContentViewProfile lookingForAJobDescription={props.profile.lookingForAJobDescription} />
      <ContentSkills />
      <ContentStrengths />
      <ContentPortfolio />
      <WritePublication onSubmit={sendPost} />
      <PagePublication posts={props.posts} />
    </div>
  );
};

export default Profile;
