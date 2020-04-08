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
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
      <PagePublication posts={props.profilePage.posts} />
    </div>
  );
};

export default Profile;
