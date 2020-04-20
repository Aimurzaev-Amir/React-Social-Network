import React from "react";
import Facebook from "../ProfileInfoImg/facebook.svg";
import stl from "../ProfileInfo.module.css";

let SocialFacebook = (props) => {
  return (
    <a href={props.facebook}>
      <div className={`${stl.socialNetwork} ${stl.socialFacebook}`}>
        <img src={Facebook} alt="be able users facebook" />
      </div>
    </a>
  );
};

export default SocialFacebook;
