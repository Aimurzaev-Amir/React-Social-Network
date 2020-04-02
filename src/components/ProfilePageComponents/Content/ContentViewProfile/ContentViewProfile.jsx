import React from "react";
import ViewProfileGrid from "./ViewProfileGrid";
import ContentBlockTitle from "./ContentBlockTitle";
import stl from "../Content.module.css";

let ContentViewProfile = () => {
  return (
    <div className={stl.contentViewProfile}>
      <ContentBlockTitle />
      <ViewProfileGrid />
      <p>
        Short info:We are a team of developers impassioned about creating
        quality and distinguished HTML and WordPress templates. Our goal is to
        combine professional code, preeminent design and user-friendly admin
        interface in each product. With more than 5 years of experience and
        about 20 products behind and more than 11k customers, we are full of
        ideas and energy for new projects and we know how to surprise you.{" "}
      </p>
    </div>
  );
};

export default ContentViewProfile;
