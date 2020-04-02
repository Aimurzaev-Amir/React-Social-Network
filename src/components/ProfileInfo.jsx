import React from "react";
import ProfileBanner from "./ProfilePageComponents/ProfileInfoComponents/ProfileBanner";
import ProfileIntro from "./ProfilePageComponents/ProfileInfoComponents/ProfileIntro";

let ProfileInfo = () => {
    return (
        <div className="ProfileInfo">
            <ProfileBanner />
            <ProfileIntro />
            
        </div>
    );
}

export default ProfileInfo;