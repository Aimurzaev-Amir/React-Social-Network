import React from "react";
import GPS from "./ProfileInfoImg/gps.svg";
import Photo from "./ProfileInfoImg/user.png";
import ProfileIntroSocial from "./ProfileIntroSocial";
import stl from "./ProfileInfo.module.css";

let ProfileUser = () => {
  return (
    <div className={stl.profileUser}>
      <div className={stl.profilePhoto}>
        <img src={Photo} alt="" />
      </div>
      <div className={stl.bannerText}>
        <p className={stl.userName}>Aimurzayev Amir</p>
        <div className={stl.userLocation}>
          <img src={GPS} alt="be able user location" />
          <p>Almaty, Kazakhstan</p>
        </div>
        <ProfileIntroSocial />
      </div>
    </div>
  );
};

export default ProfileUser;
