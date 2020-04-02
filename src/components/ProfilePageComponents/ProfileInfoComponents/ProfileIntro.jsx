import React from "react";
import ProfileIntroButtons from "./ProfileIntroButtons";
import ProfileUser from "./ProfileUser";
import stl from "./ProfileInfo.module.css";

let ProfileIntro = () => {
  return (
    <div className={stl.profileIntroBg}>
      <div className={`${stl.profileIntro} ${stl.wrapper}`}>
        <ProfileUser />
        <ProfileIntroButtons />
      </div>
    </div>
  );
};

export default ProfileIntro;
