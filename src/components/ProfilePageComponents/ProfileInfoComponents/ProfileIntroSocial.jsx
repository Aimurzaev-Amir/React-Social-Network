import React from "react";
import SocialFacebook from "./SocialNetworks/Facebook";
import SocialTwitter from "./SocialNetworks/Twitter";
import SocialVk from "./SocialNetworks/VK";
import SocialGooglePlus from "./SocialNetworks/GooglePlus";
import SocialInstagram from "./SocialNetworks/Instagram";
import stl from "./ProfileInfo.module.css";

let ProfileIntroSocial = (props) => {
  return (
    <div className={stl.profileSocial}>
      <SocialFacebook facebook={props.contacts.facebook} />
      <SocialTwitter twitter={props.contacts.twitter} />
      <SocialInstagram instagram={props.contacts.instagram} />
      <SocialVk vk={props.contacts.vk} />
      <SocialGooglePlus website={props.contacts.website} />
    </div>
  );
};

export default ProfileIntroSocial;
