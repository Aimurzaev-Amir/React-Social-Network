import React from "react";
import VK from "../ProfileInfoImg/vk.svg";
import stl from "../ProfileInfo.module.css";

let SocialVk = (props) => {
  return (
    <a href={props.vk}>
      <div className={`${stl.socialNetwork} ${stl.socialVk}`}>
        <img src={VK} alt="be able users vk" />
      </div>
    </a>
  );
};

export default SocialVk;
