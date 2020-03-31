import React from "react";
import SocialFacebook from "./SocialNetworks/Facebook";
import SocialTwitter from "./SocialNetworks/Twitter";
import SocialVk from "./SocialNetworks/VK";
import SocialGooglePlus from "./SocialNetworks/GooglePlus";
import SocialInstagram from "./SocialNetworks/Instagram";

let ProfileIntroSocial = () => {
    return (
        <div className="profileSocial">
            <SocialFacebook />
            <SocialTwitter />
            <SocialInstagram />
            <SocialVk />
            <SocialGooglePlus />
        </div>
    );
}

export default ProfileIntroSocial;