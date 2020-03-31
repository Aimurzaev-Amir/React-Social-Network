import React from "react";
import ViewProfileIcon from "../../../../img/Content/ViewProfile/ViewProfile.svg";

let ContentBlockTitle = () => {
  return (
    <div className="contentBlockTitle">
      <img src={ViewProfileIcon} alt="be able view user profile intro" />
      <h4>View Profile</h4>
    </div>
  );
};

export default ContentBlockTitle;
