import React from "react";
import GooglePlus from "../ProfileInfoImg/google-plus-logo.svg";
import stl from "../ProfileInfo.module.css";

let SocialGooglePlus = (props) => {
  return (
    <a href={props.website}>
      <div className={`${stl.socialNetwork} ${stl.socialGooglePlus}`}>
        <img src={GooglePlus} alt="be able users google plus +" />
      </div>
    </a>
  );
};

export default SocialGooglePlus;
