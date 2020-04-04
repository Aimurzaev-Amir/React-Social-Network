import React from "react";
import ProfileBanner from "./ProfileInfoComponents/ProfileBanner";
import ProfileIntro from "./ProfileInfoComponents/ProfileIntro";

let ProfileInfo = () => {
    return (
        <div className="ProfileInfo">
            <ProfileBanner />
            <ProfileIntro />
            
        </div>
    );
}

export default ProfileInfo;