import React from "react";
import ContentBar from "./ContentBar/ContentBar";
import ContentBanner from "./ContentBar/Content/ContentBanner/ContentBanner";
import ContentViewProfile from "./ContentBar/Content/ContentViewProfile/ContentViewProfile";
import ContentSkills from "./ContentBar/Content/ContentSkills/ContentSkills";
import ContentStrengths from "./ContentBar/Content/ContentStrengths/ContentStrengths";
import ContentPortfolio from "./ContentBar/Content/ContentPortfolio/ContentPortfolio";
import WritePublication from "./PublicationsComponents/writePublication";
import PagePublications from "./PublicationsComponents/PagePublications";


let Content = () => {
  return (
    <div>
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

export default Content;
