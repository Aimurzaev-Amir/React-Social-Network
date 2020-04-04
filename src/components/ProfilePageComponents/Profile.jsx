import React from "react";
import ContentBar from "./Content/ContentBar/ContentBar";
import ContentBanner from "./Content/ContentBanner/ContentBanner";
import ContentViewProfile from "./Content/ContentViewProfile/ContentViewProfile";
import ContentSkills from "./Content/ContentSkills/ContentSkills";
import ContentStrengths from "./Content/ContentStrengths/ContentStrengths";
import ContentPortfolio from "./Content/ContentPortfolio/ContentPortfolio";
import WritePublication from "./PublicationsComponents/WritePublication/writePublication";
import PagePublications from "./PublicationsComponents/PagePublications";

let Profile = () => {
  return (
    <div className="pageContentstl">
      <ContentBar />
      <ContentBanner />
      <ContentViewProfile />
      <ContentSkills />
      <ContentStrengths />
      <ContentPortfolio />
      <WritePublication />
      <PagePublications />
    </div>
  );
};

export default Profile;
