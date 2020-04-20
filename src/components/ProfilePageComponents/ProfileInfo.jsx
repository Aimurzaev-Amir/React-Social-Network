import React from "react";
import ProfileBanner from "./ProfileInfoComponents/ProfileBanner";
import ProfileIntro from "./ProfileInfoComponents/ProfileIntro";
import Preloader from "../../common/preloader/Preloader"

let ProfileInfo = (props) => {
    if(!props.profile){
        return(
            < Preloader />
        )
    }
  return (
    <div className="ProfileInfo">
      <ProfileBanner profile={props.profile} />
      <ProfileIntro profile={props.profile} />
    </div>
  );
};

export default ProfileInfo;
