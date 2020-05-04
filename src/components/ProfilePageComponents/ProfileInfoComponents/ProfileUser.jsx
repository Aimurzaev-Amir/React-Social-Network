import React from "react";
import GPS from "./ProfileInfoImg/gps.svg";
import Photo from "../../../assets/user.png";
import ProfileIntroSocial from "./ProfileIntroSocial";
import stl from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import { NavLink } from "react-router-dom";

let ProfileUser = (props) => {
  const onChangePhoto = (e) => {
    props.changePhoto(e.target.files[0]);
  };
  return (
    <div className={stl.profileUser}>
      <div className={stl.profilePhoto}>
        <img
          src={props.photos ? props.photos : Photo}
          alt="be able user profile"
        />
        {props.userId ? null : (
          <div className={stl.photoSettings}>
            <label className={stl.inputLabel} htmlFor="upload-photo">
              Change photo...
            </label>
            <input
              className={stl.uploadPhoto}
              type="file"
              name="photo"
              id="upload-photo"
              onChange={onChangePhoto}
            />
            <label className={stl.inputLabel}> <NavLink to="/edit">Edit profile</NavLink></label>
          </div>
        )}
      </div>
      <div className={stl.bannerText}>
        <p className={stl.userName}>
          {props.fullName ? props.fullName : "userName"}
        </p>
        <div className={stl.userLocation}>
          <img src={GPS} alt="be able user location" />
          <ProfileStatus
            userId={props.userId}
            status={props.status}
            updateUserStatus={props.updateUserStatus}
          />
        </div>
        <ProfileIntroSocial contacts={props.contacts} />
      </div>
    </div>
  );
};

export default ProfileUser;
