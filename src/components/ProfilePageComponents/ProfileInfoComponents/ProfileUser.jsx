import React from "react";
import GPS from "./ProfileInfoImg/gps.svg";
import Photo from "../../../assets/user.png";
import ProfileIntroSocial from "./ProfileIntroSocial";
import stl from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

let ProfileUser = (props) => {
  return (
    <div className={stl.profileUser}>
      <div className={stl.profilePhoto}>
        <img src={props.photos ? props.photos : Photo} alt="" />
      </div>
      <div className={stl.bannerText}>
        <p className={stl.userName}>
          {props.fullName ? props.fullName : "userName"}
        </p>
        <div className={stl.userLocation}>
          <img src={GPS} alt="be able user location" />
          <ProfileStatus
            status={props.status}
            // // aboutMe={props.aboutMe}

            // editMode={props.editMode}
            // SaveStatus={props.SaveStatus}
            // ChangeStatus={props.ChangeStatus}
            // localStatus={props.localStatus}
            // onStatusChange={props.onStatusChange}
            updateUserStatus={props.updateUserStatus}
          />
        </div>
        <ProfileIntroSocial contacts={props.contacts} />
      </div>
    </div>
  );
};

export default ProfileUser;
