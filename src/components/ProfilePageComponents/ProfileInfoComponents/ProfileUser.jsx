import React from "react";
import GPS from "./ProfileInfoImg/gps.svg";
import Photo from "./ProfileInfoImg/user.png";
import ProfileIntroSocial from "./ProfileIntroSocial";

let ProfileUser = () => {
  return (
    <div className="profileUser">
      <div className="profilePhoto">
        <img src={Photo} alt="" />
      </div>
      <div className="banner-text">
        <p className="userName">Aimurzayev Amir</p>
        <div className="user-location">
          <img src={GPS} alt="be able user location" />
          <p>Almaty, Kazakhstan</p>
        </div>
        <ProfileIntroSocial />
      </div>
    </div>
  );
};

export default ProfileUser;
