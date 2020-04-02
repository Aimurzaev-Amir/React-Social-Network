import React from "react";
import ViewProfileIcon from "../ContentImg/ViewProfile/ViewProfile.svg";
import stl from "../Content.module.css";

let ContentBlockTitle = () => {
  return (
    <div className={stl.contentBlockTitle}>
      <img src={ViewProfileIcon} alt="be able view user profile intro" />
      <h4>View Profile</h4>
    </div>
  );
};

export default ContentBlockTitle;
