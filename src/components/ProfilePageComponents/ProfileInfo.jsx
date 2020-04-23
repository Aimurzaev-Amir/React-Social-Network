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
        // SaveStatus={props.SaveStatus}
        // ChangeStatus={props.ChangeStatus}
        // editMode={props.editMode}
        status={props.status}
        // localStatus={props.localStatus}
        // onStatusChange={props.onStatusChange}
        updateUserStatus={props.updateUserStatus}
      />
    </div>
  );
};

export default ProfileInfo;
