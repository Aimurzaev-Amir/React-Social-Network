import React from "react";
import Facebook from "../ProfileInfoImg/facebook.svg";
import stl from "../ProfileInfo.module.css";

let SocialFacebook = () => {
  return (
    <div className={`${stl.socialNetwork} ${stl.socialFacebook}`}>
      <img src={Facebook} alt="be able users facebook" />
    </div>
  );
};

export default SocialFacebook;
