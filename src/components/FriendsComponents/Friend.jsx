import React from "react";
import stl from "./Friends.module.css";
import { NavLink } from "react-router-dom";

let Friend = (props) => {
  let followedA = props.followed 
  ? (
    <button
      disabled={props.followingInProgress.some((id) => id === props.id)}
      onClick={() => { props.setUnfollow(props.id); }}
      className={stl.followedBtn} >unfollow</button>
  ) : (
    <button
      disabled={props.followingInProgress.some((id) => id === props.id)}
      onClick={() => {props.setFollow(props.id);}}
      className={stl.followedBtn}>follow</button>
  );

  return (
    <div className={stl.friend}>
      <div className={stl.friendBanner}>
        <img src={props.banner} alt="" />
      </div>
      <NavLink to={"/profile/" + props.id}>
        <div className={stl.friendPhoto}>
          <img
            src={props.friendPhoto}
            alt="be able friends {props.friendName}"
          />
        </div>
      </NavLink>
      <div className={stl.friendInfo}>
        <div className={stl.friendName}>
          <p className={stl.Name}>{props.friendName}</p>
          <p className={stl.status}>{props.friendStatus}</p>
        </div>
        <div className={stl.friendFollowed}>{followedA}</div>
      </div>
    </div>
  );
};

export default Friend;
