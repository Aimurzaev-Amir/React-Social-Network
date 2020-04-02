import React from "react";
import Instagram from "../ProfileInfoImg/instagram.svg";
import stl from "../ProfileInfo.module.css";

let SocialInstagram = () => {
  return (
    <div className={`${stl.socialNetwork} ${stl.socialInstagram}`}>
      <img src={Instagram} alt="be able users instagram" />
    </div>
  );
};

export default SocialInstagram;
