import React from "react";
import ProfileIntroButtons from "./ProfileIntroButtons";
import ProfileUser from "./ProfileUser";
import stl from "./ProfileInfo.module.css";

let ProfileIntro = (props) => {
  return (
    <div className={stl.profileIntroBg}>
      <div className={`${stl.profileIntro} ${stl.wrapper}`}>
        <ProfileUser 
          contacts={props.profile.contacts}
          photos={props.profile.photos.large}
          fullName={props.profile.fullName}
          status={props.status}
          updateUserStatus={props.updateUserStatus}
          userId={props.userId}
          //thunks
          changePhoto={props.changePhoto}
        />
        <ProfileIntroButtons />
      </div>
    </div>
  );
};

export default ProfileIntro;
