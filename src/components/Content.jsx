import React from "react";
import ContentBar from "./ProfilePageComponents/Content/ContentBar/ContentBar";
import ContentBanner from "./ProfilePageComponents/Content/ContentBanner/ContentBanner";
import ContentViewProfile from "./ProfilePageComponents/Content/ContentViewProfile/ContentViewProfile";
import ContentSkills from "./ProfilePageComponents/Content/ContentSkills/ContentSkills";
import ContentStrengths from "./ProfilePageComponents/Content/ContentStrengths/ContentStrengths";
import ContentPortfolio from "./ProfilePageComponents/Content/ContentPortfolio/ContentPortfolio";
import WritePublication from "./ProfilePageComponents/PublicationsComponents/WritePublication/writePublication";
import PagePublication from "./ProfilePageComponents/PublicationsComponents/PagePublication";


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
      <PagePublication />
    </div>
  );
};

export default Content;
