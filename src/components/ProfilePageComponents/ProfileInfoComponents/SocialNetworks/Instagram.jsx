import React from "react";
import Instagram from "../ProfileInfoImg/instagram.svg";
import stl from "../ProfileInfo.module.css";

let SocialInstagram = (props) => {
  return (
    <a href={props.instagram}>
      <div className={`${stl.socialNetwork} ${stl.socialInstagram}`}>
        <img src={Instagram} alt="be able users instagram" />
      </div>
    </a>
  );
};

export default SocialInstagram;
