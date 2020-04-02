import React from "react";
import VK from "../ProfileInfoImg/vk.svg";
import stl from "../ProfileInfo.module.css";

let SocialVk = () => {
  return (
    <div className={`${stl.socialNetwork} ${stl.socialVk}`}>
      <img src={VK} alt="be able users vk" />
    </div>
  );
};

export default SocialVk;
