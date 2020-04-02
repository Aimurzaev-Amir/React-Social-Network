import React from "react";
import Twitter from "../ProfileInfoImg/twitter.svg"
import stl from "../ProfileInfo.module.css";

let SocialTwitter = () => {
  return (
    <div className={`${stl.socialNetwork} ${stl.socialTwitter}`}>
                <img src={Twitter} alt="be able users twitter"/>
            </div>
  );
};

export default SocialTwitter;