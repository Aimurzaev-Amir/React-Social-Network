import React from "react";
import ProfileBanner from "./ProfileInfoComponents/ProfileBanner";
import ProfileIntro from "./ProfileInfoComponents/ProfileIntro";
import Preloader from "../../common/preloader/Preloader";

let ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className="ProfileInfo">
      <ProfileBanner />
      <ProfileIntro 
        profile={props.profile}
        status={props.status}
        userId={props.userId}
        updateUserStatus={props.updateUserStatus}
        //thunks
        changePhoto={props.changePhoto}
      />
    </div>
  );
};

export default ProfileInfo;
