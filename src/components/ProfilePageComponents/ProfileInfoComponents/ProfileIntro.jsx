import React from "react";
import ProfileIntroButtons from "./ProfileIntroButtons";
import ProfileUser from "./ProfileUser";

let ProfileIntro = () => {
  return (
    <div className="profileIntro-bg">
      <div className="profileIntro wrapper">
        <ProfileUser />
        <ProfileIntroButtons />
      </div>
    </div>
  );
};

export default ProfileIntro;
