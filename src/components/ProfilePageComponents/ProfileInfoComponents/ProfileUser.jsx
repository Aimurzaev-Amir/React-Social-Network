import React from "react";
import GPS from "./ProfileInfoImg/gps.svg";
import Photo from "../../../assets/user.png";
import ProfileIntroSocial from "./ProfileIntroSocial";
import stl from "./ProfileInfo.module.css";

let ProfileUser = (props) => {
  return (
    <div className={stl.profileUser}>
      <div className={stl.profilePhoto}>
        <img src={props.photos ? props.photos : Photo} alt="" />
      </div>
      <div className={stl.bannerText}>
        <p className={stl.userName}>{props.fullName ? props.fullName : "userName"}</p>
        <div className={stl.userLocation}>
          <img src={GPS} alt="be able user location" />
          <p>{props.aboutMe ? props.aboutMe : "status"}</p>
        </div>
        <ProfileIntroSocial contacts={props.contacts}/>
      </div>
    </div>
  );
};

export default ProfileUser;
